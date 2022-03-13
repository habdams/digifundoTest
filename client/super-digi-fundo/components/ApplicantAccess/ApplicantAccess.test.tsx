import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApplicantAccess } from "./ApplicantAccess";

afterEach(cleanup);

describe("Applicant Access Component Test", () => {
    it("should show a header to indicate applicant's id", () => {
        render(<ApplicantAccess />);
        const applicationIdLabel = screen.getByText(/Anwendungs/i);
        expect(applicationIdLabel).toHaveTextContent("Anwendungs-ID");
    });

    it("should render an introductory message to the user", () => {
        render(<ApplicantAccess />);
        const introText = screen.getByText(
            /Bitte geben Sie den an Ihre E-Mail/i
        );
        expect(introText).toHaveTextContent(
            "Bitte geben Sie den an Ihre E-Mail gesendeten Zugangscode in das Feld unten ein."
        );
    });

    it("should show a label that points to the access code input area", () => {
        render(<ApplicantAccess />);
        const providedAppitionIDLabel = screen.getByText("Zugangscode");

        expect(providedAppitionIDLabel).toHaveTextContent("Zugangscode");
    });
});
