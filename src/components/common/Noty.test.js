import React from "react";
import Noty from "./Noty";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

it("renders with correct", () => {
  render(<Noty type="success" open={true} text="test" />);
  const testEl = screen.getByTestId("Noty");
  expect(testEl).toBeInTheDocument();
  expect(testEl).toHaveTextContent("test");
});

it("show hidden with correct", () => {
  render(<Noty type="success" open={false} text="test" />);
  expect(screen.queryByText('test')).not.toBeInTheDocument();
});