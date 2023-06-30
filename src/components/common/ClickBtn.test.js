import React from "react";
import ClickBtn from "./ClickBtn";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRenderer } from "react-test-renderer/shallow";

afterEach(cleanup);

const setup = () => {
    const props = Object.assign({
        width: "100px",
        height: "100px",
        type: "type",
        text: "test",
        onClick: jest.fn(),
    })
    const renderer = createRenderer()
    renderer.render(<ClickBtn {...props} disabled={true} />)
    const output = renderer.getRenderOutput()

    return {
        props: props,
        output: output
    }
}

describe('components common', () => {
    describe('ClickBtn', () => {
        const { props } = setup();
        it("renders with correct", () => {
            render(<ClickBtn {...props} disabled={true} />);
            const testEl = screen.getByText("test");
            expect(testEl).toBeInTheDocument();
            expect(testEl).toHaveClass("type disabled");
            expect(testEl).toHaveStyle("width: 100px; height: 100px; font-size:16px");
        });

        it("should onClick disabled working correct", () => {
            render(<ClickBtn {...props} disabled={true} />);
            const testEl = screen.getByText("test");
            userEvent.click(testEl);
            expect(props.onClick).not.toBeCalled()
        });

        it("should onClick working correct", () => {
            render(<ClickBtn {...props} disabled={false} />);
            const testEl = screen.getByText("test");
            userEvent.click(testEl);
            expect(props.onClick).toBeCalled()
        });

        it("matches snapshot", () => {
            const { output } = setup();
            expect(output).toMatchSnapshot();
        });

    })
})