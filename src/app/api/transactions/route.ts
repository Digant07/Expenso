import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/options'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { TransactionSchema } from '@/lib/transactions'
import { getTransactions, saveTransaction, deleteTransaction } from '@/lib/transactions'
import { Prisma } from '@prisma/client'

// Schema for query parameters
const QuerySchema = z.object({
  startDate: z.string().optional().transform(date => date ? new Date(date) : undefined),
  endDate: z.string().optional().transform(date => date ? new Date(date) : undefined),
  categoryId: z.string().optional(),
})

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      console.log('Unauthorized: No user session or email')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get the user from the database to get their ID
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      console.error('User not found in database')
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Parse query parameters
    const { searchParams } = new URL(request.url)
    const queryResult = QuerySchema.safeParse(Object.fromEntries(searchParams))
    
    if (!queryResult.success) {
      console.log('Invalid query parameters:', queryResult.error)
      return NextResponse.json(
        { error: 'Invalid query parameters', details: queryResult.error },
        { status: 400 }
      )
    }

    console.log(`Fetching transactions for user: ${user.id}`)
    const transactions = await getTransactions({
      userId: user.id,
      ...queryResult.data
    })

    console.log(`Retrieved ${transactions.length} transactions`)
    return NextResponse.json(transactions)
  } catch (error) {
    console.error('Error in GET /api/transactions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    console.log('POST /api/transactions - Starting transaction creation')
    
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      console.log('Unauthorized: No user session or email')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get the user from the database
    console.log(`Looking up user with email: ${session.user.email}`)
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      console.error('User not found in database')
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    console.log(`User found: ${user.id}`)

    // Get request body
    const body = await request.json()
    console.log('Transaction data received:', {
      ...body,
      userId: '[REDACTED]'
    })

    // Check if there's at least one category for this user
    const categoryCount = await prisma.category.count({
      where: { userId: user.id }
    })

    if (categoryCount === 0) {
      console.error('No categories found for user')
      return NextResponse.json(
        { error: 'No categories found. Please create a category first.' },
        { status: 400 }
      )
    }

    // Verify the category exists
    if (body.categoryId) {
      const category = await prisma.category.findFirst({
        where: {
          id: body.categoryId,
          userId: user.id
        }
      })

      if (!category) {
        console.error('Category not found')
        return NextResponse.json(
          { error: 'Category not found' },
          { status: 404 }
        )
      }
    }

    // Validate transaction data
    const validationResult = TransactionSchema.safeParse(body)
    if (!validationResult.success) {
      console.error('Invalid transaction data:', validationResult.error)
      return NextResponse.json(
        { error: 'Invalid transaction data', details: validationResult.error },
        { status: 400 }
      )
    }

    // Save the transaction
    const transaction = await saveTransaction({
      ...validationResult.data,
      userId: user.id
    })

    if (!transaction) {
      console.error('Failed to create transaction')
      return NextResponse.json(
        { error: 'Failed to create transaction' },
        { status: 500 }
      )
    }

    console.log('Transaction created successfully:', {
      id: transaction.id,
      amount: transaction.amount,
      categoryId: transaction.categoryId
    })

    return NextResponse.json(transaction)
  } catch (error) {
    console.error('Error in POST /api/transactions:', error)
    return NextResponse.json(
      { error: 'Failed to create transaction' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Transaction ID is required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    await deleteTransaction(id, user.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in DELETE /api/transactions:', error)
    return NextResponse.json(
      { error: 'Failed to delete transaction' },
      { status: 500 }
    )
  }
}