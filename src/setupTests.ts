// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
// Remove mq-polyfill import since it's not needed
// The matchMedia polyfill is already implemented below
import { beforeAll, afterAll, afterEach, vi } from "vitest";

import { server } from "./mocks/server.ts";

// setupTests.js
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: {
    matches: boolean;
    media: string;
    onchange: null | (() => void);
    addListener: () => void;
    removeListener: () => void;
  }) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Changed from jest.fn() to vi.fn()
    removeListener: vi.fn(),
  }),
});

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
