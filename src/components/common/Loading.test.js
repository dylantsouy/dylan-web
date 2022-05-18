import React from "react";
import Loading from "./Loading";
import { render, cleanup, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders with correct", () => {
  render(<Loading color="white" />);
  const testEl = screen.getByTestId("loading");
  expect(testEl).toBeInTheDocument();
  expect(testEl).toHaveClass("white");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Loading color="white" />).toJSON();
  expect(tree).toMatchSnapshot();
});
