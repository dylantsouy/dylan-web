import React from "react";
import Overlay from "./Overlay";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRenderer } from "react-test-renderer/shallow";

afterEach(cleanup);

const setup = (color) => {
  const props = Object.assign({
    color,
    clickHandler: jest.fn(),
  })
  const renderer = createRenderer()
  renderer.render(<Overlay {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

describe('components common', () => {
  describe('Overlay', () => {

    it("renders with correct", () => {
      const { output } = setup('black')
      expect(output.type).toBe('div')
      expect(output.props.className).toBe('overlay')
    });

    it("should click event is working correctly", () => {
      const { props } = setup()
      const { container } = render(<Overlay {...props} />)
      const overlay = container.querySelector('.overlayWithoutColor')
      expect(overlay).toHaveClass('overlayWithoutColor')
      userEvent.click(overlay)
      expect(props.clickHandler).toBeCalled()
    });

    it("matches snapshot", () => {
      const { output } = setup('black')
      expect(output).toMatchSnapshot();
    });
  })
})