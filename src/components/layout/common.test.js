import React from "react";
import Common from "./Common";
import { cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import Navbar from "./Navbar";
import Bottom from "./Bottom";
import Loading from "../common/Loading";
import BottomTop from "./BottomTop";

afterEach(cleanup);

const setup = (children) => {
  const props = Object.assign({
    clickHandler: jest.fn(),
  })
  const renderer = createRenderer()
  renderer.render(<Common {...props} >{children}</Common>)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

describe('components common', () => {
  describe('Common', () => {
    it("renders with correct", () => {
      let { output } = setup('test')
      expect(output.type).toBe(React.Fragment)
      const [loading, container] = output.props.children
      // render loading
      expect(loading.props.className).toBe('loading-outer')
      expect(loading.props.children.type).toBe(Loading)
      // render container
      expect(container.props.className).toBe('container')
      const [nav, child, Btop, bottom] = container.props.children
      expect(nav.type).toBe(Navbar)
      expect(child.type).toBe(React.Fragment)
      expect(child.props.children).toBe('test')
      expect(Btop.type).toBe(BottomTop)
      expect(bottom.type).toBe(Bottom)
    });

    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})