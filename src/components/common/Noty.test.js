import React from "react";
import Noty from "./Noty";
import { render, cleanup, screen } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";

const setup = (open) => {
  const props = Object.assign({
    type: "success",
    open: open === false ? false : true,
    text: "test",
    color: 'black',
  })
  const renderer = createRenderer()
  renderer.render(<Noty {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

afterEach(cleanup);

describe('components common', () => {
  describe('Noty', () => {
    it("renders with correct", () => {
      const { props } = setup(true);
      render(<Noty {...props} />);
      const testEl = screen.getByText("test");
      expect(testEl).toBeInTheDocument();
      expect(testEl).toHaveTextContent("test");
    });

    it("show hidden with correct", () => {
      const { props } = setup(false);
      render(<Noty {...props} />);
      expect(screen.queryByText('test')).not.toBeInTheDocument();
    });

    it("event click action correctly", () => {
      const { props } = setup(false);
      render(<Noty {...props} />);
      expect(screen.queryByText('test')).not.toBeInTheDocument();
    });

    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})