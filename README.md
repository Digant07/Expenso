# Expenso

A modern expense tracker application built for a hackathon to help you manage your finances efficiently.

## Features

- User Authentication with Google Sign-In / OAuth
- Complete expense and income tracking
- Interactive dashboards with spending analysis
- Fully responsive mobile-friendly design
- Recurring transaction support
- Budget goals and spending alerts
- Advanced analytics and spending trends
- Multi-currency support
- Data import and export functionality
- Offline mode with data sync
- Progressive Web App (PWA) capabilities
- Calendar view for transaction tracking
- Dark and Light theme options

## Tech Stack

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- NextAuth.js for authentication
- Prisma as the database ORM
- Chart.js for data visualization

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git for version control

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Digant07/Expenso.git
cd Expenso
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration values (database URL, OAuth credentials, etc.)

### 4. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable React components
├── lib/           # Utility functions and configurations
├── styles/        # Global styles and theme
└── types/         # TypeScript type definitions
```

## Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes and commit (`git commit -m 'Add your feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT License - Feel free to use this project however you like.

## Questions or Issues?

If you encounter any issues or have suggestions, feel free to open an issue on GitHub.
