import { fireEvent, render, screen } from "@testing-library/react";
import type { AnchorHTMLAttributes } from "react";
import { describe, expect, it, vi } from "vitest";
import EmailProductionPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => <a href={String(href)} {...props}>{children}</a>,
}));

describe("ASAP Mail email-production landing page", () => {
  it("presents the product, workflow and implementation CTA", () => {
    render(<EmailProductionPage />);
    expect(screen.getByRole("heading", { level: 1, name: /from email brief to brand-ready html/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /discuss implementation/i })[0]).toHaveAttribute("href", "https://t.me/starcv");
    expect(screen.getByRole("heading", { name: /configure once. produce repeatedly/i })).toBeInTheDocument();
  });

  it("covers audiences, production outputs, pricing and FAQ", () => {
    render(<EmailProductionPage />);
    expect(screen.getByText("CRM & retention teams")).toBeInTheDocument();
    expect(screen.getByText("Promotional emails")).toBeInTheDocument();
    expect(screen.getByText("$590")).toBeInTheDocument();
    expect(screen.getByText("$790")).toBeInTheDocument();
    expect(screen.getByText("$990")).toBeInTheDocument();
    expect(screen.getByText(/does it work with outlook and mobile clients/i)).toBeInTheDocument();
  });

  it("calculates savings from editable assumptions", () => {
    render(<EmailProductionPage />);
    const emailInput = screen.getByLabelText(/emails per month/i);
    fireEvent.change(emailInput, { target: { value: "5" } });
    expect(screen.getByText("$2,370")).toBeInTheDocument();
    expect(screen.getByText("$1,040")).toBeInTheDocument();
  });
});
