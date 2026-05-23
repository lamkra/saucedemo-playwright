import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,

    headless: false,

    launchOptions: {
      slowMo: 800
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }
});