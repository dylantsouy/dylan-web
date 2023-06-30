import React from "react";
import Loading from "./Loading";
import { cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";

afterEach(cleanup);

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<Loading color="white" />)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}


describe('components common', () => {
  describe('Loading', () => {
    it("renders with correct", () => {
      const { output } = setup()
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('loading-outer')
      const { children } = output.props
      expect(children.type).toBe('div');
      // check props show correctly
      expect(children.props.className).toBe('loading white')
    });

    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})