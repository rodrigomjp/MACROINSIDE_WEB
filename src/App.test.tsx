import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renderiza el logo de MacroInside en el header", () => {
  render(<App />);
  const header = screen.getByRole("banner");
  const logo = within(header).getByAltText(/MacroInside/i);
  expect(logo).toBeInTheDocument();
});
