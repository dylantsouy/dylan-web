import React from "react";
import ClickBtn from "./ClickBtn";
import { render, cleanup, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders with correct", () => {
    render(<ClickBtn width="100px" height="100px" type="type" disabled text="test" />);
    const testEl = screen.getByTestId("clickBtn");
    expect(testEl).toBeInTheDocument();
    expect(testEl).toHaveTextContent("test");
    expect(testEl).toHaveClass("type disabled");
    expect(testEl).toHaveStyle("width: 100px; height: 100px; font-size:16px");
});

it("matches snapshot", () => {
    const tree = renderer.create(<ClickBtn text="test" />).toJSON();
    expect(tree).toMatchSnapshot();
});
