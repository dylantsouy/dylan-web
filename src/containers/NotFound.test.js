import React from "react";
import { cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import NotFound from "./NotFound";

afterEach(cleanup);

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<NotFound />)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}


describe('container', () => {
  describe('Main', () => {
    it("renders with correct", () => {
      const { output } = setup()
      expect(output.type).toBe(React.Fragment);
      expect(output.props.children).toBe('Not Found')
    });

    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})