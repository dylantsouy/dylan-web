import React from "react";
import Overlay from "./Overlay";
import { render, cleanup, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

const props = Object.assign({
  color: 'black',
  clickHandler: jest.fn(),
})

describe('components common', () => {
  describe('Overlay', () => {
    it("renders with correct", () => {
      render(<Overlay {...props} />);
      const testEl = screen.getByTestId("overlay");
      expect(testEl).toBeInTheDocument();
      expect(testEl).toHaveClass("overlay");
    });

    it("should onClick working correct", () => {
      render(<Overlay {...props} />);
      const testEl = screen.getByTestId("overlay");
      userEvent.click(testEl);
      expect(props.clickHandler).toBeCalled()
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<Overlay {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })
})