import React from "react";
import Noty from "./Noty";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe('components common', () => {
  describe('Noty', () => {
    it("renders with correct", () => {
      render(<Noty type="success" open={true} text="test" />);
      const testEl = screen.getByText("test");
      expect(testEl).toBeInTheDocument();
      expect(testEl).toHaveTextContent("test");
    });

    it("show hidden with correct", () => {
      render(<Noty type="success" open={false} text="test" />);
      expect(screen.queryByText('test')).not.toBeInTheDocument();
    });
  })
})