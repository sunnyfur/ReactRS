import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { server } from './mock/server';
import { fetch, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Request = Request;
global.Response = Response;

expect.extend(matchers);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());
