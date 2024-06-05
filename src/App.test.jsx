import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

import App from "./App";

test("renders headline", () => {
  render(<App />);
  const headerElement = screen.getByText(/Vite \+ React/i);
  expect(headerElement).toBeInTheDocument();
});
