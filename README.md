# Stock

![GitHub last commit](https://img.shields.io/github/last-commit/Jimmy-02/stock)
![GitHub Repo stars](https://img.shields.io/github/stars/Jimmy-02/stock)
![GitHub Issues](https://img.shields.io/github/issues/Jimmy-02/stock)
![GitHub repo size](https://img.shields.io/github/repo-size/Jimmy-02/stock)
![GitHub top language](https://img.shields.io/github/languages/top/Jimmy-02/stock)

Stock is a modern stock market tracking platform built with Next.js and TypeScript. The application enables users to monitor stock prices, manage personalized watchlists, set price alerts, and explore market insights through an intuitive dashboard.

The project leverages Better Auth for authentication, MongoDB for data persistence, Inngest for background workflows, and TradingView widgets for interactive market visualization.

---

## Tech Stack

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- React Hook Form
- Zod

### Backend

- Next.js Server Actions
- Better Auth
- MongoDB
- Mongoose
- Nodemailer

### Automation & Tools

- Inngest
- ESLint
- Prettier

---

## Features

### User

- User authentication
- Browse stock information
- Search stocks
- Stock detail pages
- Interactive TradingView charts
- Personalized watchlist
- Responsive user interface

### Notifications

- Create price alerts
- Email notifications
- Automated background workflows with Inngest

### System

- Secure authentication with Better Auth
- MongoDB data persistence
- Server-side rendering with Next.js
- Type-safe validation using Zod
- Background event processing

---

## Architecture

The project follows a full-stack architecture using the Next.js App Router.

```text
Stock
├── app
├── components
├── db
├── inngest
├── lib
├── models
├── services
├── actions
├── hooks
├── types
└── public
```

The application uses Next.js for both the frontend and backend. Authentication is handled by Better Auth, MongoDB stores user and watchlist data, Inngest manages background jobs such as alerts and scheduled tasks, while TradingView widgets provide real-time market visualization.

---

## Installation

Clone the repository.

```bash
git clone https://github.com/Jimmy-02/stock.git
```

Move into the project directory.

```bash
cd stock
```

Install dependencies.

```bash
npm install
```

Create the environment file.

```text
.env.local
```

Start the development server.

```bash
npm run dev
```

---

## Available Scripts

Run the development server.

```bash
npm run dev
```

Build the project.

```bash
npm run build
```

Start the production server.

```bash
npm start
```

Run ESLint.

```bash
npm run lint
```

---

## Environment Variables

The project requires environment variables for the following services:

- MongoDB
- Better Auth
- Inngest
- Nodemailer
- Stock Market API
- TradingView configuration

---

## Future Improvements

- Email verification
- Forgot password
- OAuth providers
- Portfolio management
- Historical performance analytics
- News aggregation
- Multiple watchlists
- Dark mode improvements

---

## License

This project is licensed under the MIT License.