# SauceDemo Playwright Automation

End-to-end automation testing project for SauceDemo using Playwright and TypeScript.

## Tech Stack

- Playwright
- TypeScript
- Node.js

## Features

- Page Object Model (POM)
- Configurable environment variables
- Screenshot/video/trace on failure
- Positive purchase flow test
- Negative login test

## Installation

```bash
npm install
```

## Run Tests

```bash
npx playwright test
```

## Run Tests in UI Mode

```bash
npx playwright test --ui
```

## Environment Variables

Create a `.env` file:

```env
BASE_URL=https://www.saucedemo.com
USERNAME=standard_user
PASSWORD=secret_sauce
```

## Project Structure

```txt
pages/
tests/
playwright.config.ts
```

## Notes

This project uses Playwright with Page Object Model architecture for maintainability and scalability.