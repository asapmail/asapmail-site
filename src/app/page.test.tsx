import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the retention agency proposition and core lifecycle structure", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /turn customer data into journeys that retain/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /skip to main content/i })).toHaveAttribute(
      "href",
      "#main-content",
    );
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");

    const lifecycle = screen.getByRole("heading", {
      name: /every message starts upstream/i,
    }).closest("section");
    expect(lifecycle).not.toBeNull();
    expect(within(lifecycle!).getByText("Events")).toBeInTheDocument();
    expect(within(lifecycle!).getByText("Segments")).toBeInTheDocument();
    expect(within(lifecycle!).getByText("Journeys")).toBeInTheDocument();
    expect(within(lifecycle!).getByText("Messages")).toBeInTheDocument();
    expect(within(lifecycle!).getByText("Retention")).toBeInTheDocument();
  });

  it("states platform familiarity without claiming partner status", () => {
    render(<Home />);

    expect(screen.getAllByText("Customer.io").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Klaviyo").length).toBeGreaterThan(0);
    expect(
      screen.getByText(/names indicate familiarity and compatibility, not current partner status/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/do not claim certification, endorsement or partner status/i),
    ).toBeInTheDocument();
  });

  it("does not fabricate public case proof or a contact endpoint", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /proof should be specific, or not published/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/client names, logos, testimonials and performance figures are intentionally omitted/i)).toBeInTheDocument();
    expect(screen.getByText(/contact endpoint pending approved domain/i)).toBeInTheDocument();
  });
});
