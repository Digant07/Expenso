# Expenso

A modern, feature-rich expense tracker application designed to help you manage your finances efficiently with an intuitive user interface and powerful analytics.

## ✨ Features

### Core Functionality
- **User Authentication** — Secure Google Sign-In / OAuth integration
- **Expense Management** — Complete CRUD operations for expenses and income tracking
- **Financial Goals** — Set budgeting goals with real-time alerts

### Analytics & Insights
- **Visual Dashboards** — Comprehensive spending analysis with interactive charts
- **Advanced Analytics** — Detailed trends and financial insights
- **Calendar View** — Track transactions by date with an intuitive calendar interface

### User Experience
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop devices
- **Dark/Light Theme** — Customizable interface theme preferences
- **Offline Support** — Full offline mode with data synchronization
- **PWA Capabilities** — Install as a standalone application

### Advanced Features
- **Recurring Transactions** — Automate regular income and expense entries
- **Multi-Currency Support** — Track expenses in multiple currencies
- **Data Import/Export** — Seamlessly import and export financial data

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe application development |
| **Tailwind CSS** | Utility-first CSS framework |
| **NextAuth.js** | Authentication and authorization |
| **Prisma** | Modern database ORM |
| **Chart.js** | Data visualization and analytics |

## 📋 Prerequisites

Before getting started, ensure you have the following installed:
- **Node.js 18+** — [Download here](https://nodejs.org)
- **npm or yarn** — Package manager (comes with Node.js)
- **Git** — Version control system
- **Code Editor** — VS Code recommended

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Expenso.git
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
Then edit `.env.local` and add your configuration values (API keys, database URL, etc.)

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
├── components/             # Reusable React components
├── lib/                    # Utility functions, configs, and helpers
├── styles/                 # Global CSS and styling
└── types/                  # TypeScript type definitions and interfaces
```

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

1. **Fork the repository** — Create your own copy
2. **Create a feature branch** — `git checkout -b feature/amazing-feature`
3. **Commit your changes** — `git commit -m 'Add some amazing feature'`
4. **Push to the branch** — `git push origin feature/amazing-feature`
5. **Open a Pull Request** — Submit your changes for review

Please ensure your code follows the project's style guidelines and includes appropriate tests.

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 📞 Support

For issues, questions, or suggestions, please [open an issue](https://github.com/Digant07/Expenso/issues) on GitHub.

---

**Happy tracking! 💰**
