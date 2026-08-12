import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Asapmail home page", () => {
  it("presents the lifecycle positioning and primary audit path", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /turn customer data into journeys that keep people moving/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /request a lifecycle audit/i }),
    ).toHaveAttribute("href", "https://t.me/starcv");
    expect(screen.getByText(/platform names indicate familiarity and compatibility/i)).toBeInTheDocument();
  });

  it("publishes Telegram and clearly labeled demo contact channels in the contact section and footer", () => {
    render(<Home />);

    expect(screen.getAllByRole("link", { name: /telegram/i })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: /telegram/i })[0]).toHaveAttribute(
      "href",
      "https://t.me/starcv",
    );
    expect(screen.getAllByRole("link", { name: /email.*demo/i })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: /whatsapp.*demo/i })).toHaveLength(2);
  });

  it("renders every required home-page section", () => {
    render(<Home />);

    const requiredHeadings = [
      /engagement stack should operate as a system/i,
      /strategy that ships/i,
      /one team owns the path/i,
      /straight line from uncertainty/i,
      /selected experience of the team/i,
      /platform-aware/i,
      /make your customer engagement stack work/i,
    ];

    for (const name of requiredHeadings) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
  });

  it("describes the lifecycle chain and platform relationship without status claims", () => {
    render(<Home />);

    const system = screen.getByRole("heading", { name: /one team owns the path/i }).closest("section");
    expect(system).not.toBeNull();
    const orderedSteps = within(system as HTMLElement).getAllByRole("listitem");
    expect(orderedSteps).toHaveLength(5);
    expect(orderedSteps.map((step) => step.textContent)).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/events/i),
        expect.stringMatching(/segments/i),
        expect.stringMatching(/journeys/i),
        expect.stringMatching(/messages/i),
        expect.stringMatching(/retention/i),
      ]),
    );
    expect(screen.getByText(/do not imply endorsement, certification, or current official partner status/i)).toBeInTheDocument();
  });

  it("provides a keyboard skip link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /skip to main content/i })).toHaveAttribute("href", "#main");
    expect(screen.getAllByRole("link", { name: /email production/i })[0]).toHaveAttribute("href", "/email-production");
  });
});
