import React from "react";
import ClickBtn from "./ClickBtn";
import { render, cleanup, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

const props = Object.assign({
    width: "100px",
    height: "100px",
    type: "type",
    text: "test",
    onClick: jest.fn(),
})

describe('components common', () => {
    describe('ClickBtn', () => {
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
            const tree = renderer.create(<ClickBtn {...props} disabled={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

    })
})