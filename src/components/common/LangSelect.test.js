import React from "react";
import LangSelect from "./LangSelect";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders with correct", () => {
  render(<LangSelect />);
  const testEl = screen.getByTestId("langSelect");
  expect(testEl).toBeInTheDocument();
});

it("change select", () => {
  render(<LangSelect />);
  const testEl = screen.getByTestId("langSelect");
  const selectedEl = screen.getByTestId("selectedLang");
  fireEvent.change(testEl, { target: { value: "tw" } });
  expect(selectedEl).toHaveClass('flag-icon-tw')
});

it("matches snapshot", () => {
  const tree = renderer.create(<LangSelect />).toJSON();
  expect(tree).toMatchSnapshot();
});
