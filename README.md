# Expenso

A modern expense tracker application to help you manage your finances.

## Features

- 🔐 User Authentication (Google Sign-In / OAuth)
- 💰 CRUD operations for expenses and income
- 📊 Visual dashboards and spending analysis
- 📱 Responsive, mobile-friendly interface
- 📅 Recurring transactions
- 🎯 Budgeting goals and alerts
- 📈 Advanced analytics and trends
- 💱 Multi-currency support
- 📥 Data import/export
- ☁️ Offline mode support
- 📱 PWA capabilities
- 📆 Calendar view
- 🌓 Dark/Light theme

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- NextAuth.js for authentication
- Prisma for database
- Chart.js for analytics
- PWA support

## Prerequisites

1. Node.js 18+ and npm installed
2. Git for version control
3. A code editor (VS Code recommended)

## Setup Instructions

1. Install Node.js from [https://nodejs.org](https://nodejs.org)
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── app/                 # App router pages
├── components/          # Reusable components
├── lib/                 # Utility functions and configs
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License 