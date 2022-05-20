import React from "react";
import Common from "./Common";
import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRenderer } from "react-test-renderer/shallow";

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
    });

    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})