import '@testing-library/jest-dom/vitest';
import { beforeEach } from 'vitest';

// Give each test a clean localStorage.
beforeEach(() => {
  localStorage.clear();
});
