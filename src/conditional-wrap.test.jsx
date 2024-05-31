import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConditionalWrap from "./conditional-wrap";

describe("ConditionalWrap", () => {
    it("renders children with wrap function when condition is true", () => {
        const wrap = jest.fn().mockImplementation((children) => {
            return <div data-testid="wrapped">{children}</div>;
        });
        render(
            <ConditionalWrap condition={true} wrap={wrap}>
                <span>Test Content</span>
            </ConditionalWrap>,
        );

        expect(wrap).toHaveBeenCalled();
        expect(screen.getByTestId("wrapped")).toContainElement(
            screen.getByText("Test Content"),
        );
    });

    it("renders children directly when condition is false and wrapElse is default", () => {
        render(
            <ConditionalWrap condition={false} wrap={jest.fn()}>
                <span>Test Content</span>
            </ConditionalWrap>,
        );

        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("renders children with wrapElse function when condition is false", () => {
        const wrapElse = jest.fn().mockImplementation((children) => {
            return <section data-testid="wrappedElse">{children}</section>;
        });
        render(
            <ConditionalWrap condition={false} wrap={jest.fn()} wrapElse={wrapElse}>
                <span>Test Content</span>
            </ConditionalWrap>,
        );

        expect(wrapElse).toHaveBeenCalled();
        expect(screen.getByTestId("wrappedElse")).toContainElement(
            screen.getByText("Test Content"),
        );
    });
});
