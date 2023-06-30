import React from "react";
import { cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import PublicRoute from "./PublicRoute";
import Main from "../containers/Main";
import { Route } from "react-router-dom";

afterEach(cleanup);

const setup = (component, ...prop) => {

  const props = Object.assign({
    Component: component,
    ...prop
  })
  const renderer = createRenderer()
  renderer.render(<PublicRoute {...props} />)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}


describe('hoc', () => {
  describe('PublicRoute', () => {
    it("renders with correct", () => {
      const { output } = setup({ path: "/test", exact: true, component: Main })
      expect(output.type).toBe(Route)
      const {Component} = output.props
      expect(Component.path).toBe('/test')
      expect(Component.exact).toBe(true)
      expect(Component.component).toBe(Main)
    });

    it("matches snapshot", () => {
      const { output } = setup({ path: "/test", exact: true, component: Main })
      expect(output).toMatchSnapshot();
    });
  })
})
