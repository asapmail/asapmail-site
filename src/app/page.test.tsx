import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the development handoff status", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /retention agency website/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/secure development workflow is live/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/preview validation status/i),
    ).toBeInTheDocument();
  });
});
