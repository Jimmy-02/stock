# Changelog

All notable changes to this project are documented in this file.

## [0.1.1] - 03-08-2026

### Added
- Unit tests for `finnhub.actions.ts` (`searchStocks`, `getNews`) using Vitest, with mocked `fetch`
- CI step to run tests before build
- Vulnerability overrides for `postcss` and `sharp` bundled inside Next.js
- Project README with tech stack, architecture, and setup instructions

### Fixed
- Type-check error caused by an unused `@ts-expect-error` directive on the CSS import
- `MONGODB_URI` required check failing during CI build due to missing environment variables

## [0.1.0] - Initial release

### Added
- Project bootstrapped with `create-next-app`
- Header component with logo and navigation
- Homepage layout and stock chart display
- Sign up and sign in pages
- Better Auth integration for authentication
- Session-based route protection middleware
- MongoDB connection and Watchlist model
- Inngest client setup with typed event definitions
- Welcome email prompt and sign-up email flow
- `getAllUsersForNewsEmail` and `getWatchlistSymbolsByEmail` server actions
- `fetchJSON` helper and `getNews` function for Finnhub API
- `searchStocks` server action for stock search
- Daily news summary email job (`sendDailyNewsSummary`)
- Sonner toast notifications
- GitHub Actions CI workflow (lint, type-check, build, dependency audit, secret scanning)

### Changed
- Upgraded Inngest client to the v4 API
- `isDev` flag derived from `NODE_ENV` instead of being hardcoded
- Logo is changed

### Fixed
- Overflow issue on an image asset
- Missing import in a component
- Type-check errors in CI