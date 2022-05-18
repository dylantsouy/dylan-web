import React from "react";
import Overlay from "./Overlay";
import { render, cleanup, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders with correct", () => {
  render(<Overlay color="black" />);
  const testEl = screen.getByTestId("overlay");
  expect(testEl).toBeInTheDocument();
  expect(testEl).toHaveClass("overlay");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Overlay color="black" />).toJSON();
  expect(tree).toMatchSnapshot();
});
