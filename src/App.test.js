import React from "react";
import { cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PublicRoute from "./hoc/PublicRoute";
import App from "./App";
import Main from "./containers/Main";

afterEach(cleanup);

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<App />)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}


describe('App', () => {
  it("renders with correct", () => {
    const { output } = setup()
    const { children } = output.props
    expect(children.type).toBe(BrowserRouter)
    const { children: childrenSwitch } = children.props
    expect(childrenSwitch.type).toBe(Switch)
  });

  it("renders PublicRoute with correct", () => {
    const { output } = setup()
    const { children } = output.props
    const { children: childrenSwitch } = children.props
    const [PublicRouteEl] = childrenSwitch.props.children
    // PublicRoute
    expect(PublicRouteEl.type).toBe(PublicRoute)
    expect(PublicRouteEl.props.component).toBe(Main)
    expect(PublicRouteEl.props.path).toBe('/dylan-web')
  });

  it("renders Redirect with correct", () => {
    const { output } = setup()
    const { children } = output.props
    const { children: childrenSwitch } = children.props
    const [, RedirectEl] = childrenSwitch.props.children
    expect(RedirectEl.type).toBe(Redirect)
    expect(RedirectEl.props.to).toBe('/dylan-web')
  });

  it("renders Route with correct", () => {
    const { output } = setup()
    const { children } = output.props
    const { children: childrenSwitch } = children.props
    const [, , RouteEl] = childrenSwitch.props.children
    expect(RouteEl.type).toBe(Route)
  });

  it("matches snapshot", () => {
    const { output } = setup()
    expect(output).toMatchSnapshot();
  });
})