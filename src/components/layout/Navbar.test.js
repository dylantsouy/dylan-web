import React from "react";
import { cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import Navbar from "./Navbar";
import LangSelect from "../common/LangSelect";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";

afterEach(cleanup);

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<Navbar />)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}


describe('container', () => {
  describe('Navbar', () => {
    it("renders with correct", () => {
      const { output } = setup()
      expect(output.props.className).toBe('navbar')
    });

    it("renders left area correctly", () => {
      const { output } = setup()
      const [left] = output.props.children
      expect(left.props.className).toBe('navbar-left')
      const { children } = left.props
      expect(children.type).toBe('img')
      expect(children.props.src).toBe('logo.png')
      expect(children.props.src).toBe('logo.png')
    });

    it("renders right area correctly", () => {
      const { output } = setup()
      const [, right] = output.props.children
      expect(right.props.className).toBe('navbar-right')
    });

    it("renders Navbar items correctly", () => {
      const navItems = [
        { title: "home", router: "#home", active: true },
        { title: "about", router: "#about" },
        { title: "skill", router: "#skill" },
        { title: "project", router: "#project" },
        { title: "contact", router: "#contact" },
      ];
      const { output } = setup()
      const [, right] = output.props.children
      const [navbarItems] = right.props.children
      expect(navbarItems.props.className).toBe('navbar-items')
      navbarItems.props.children.forEach(function testNavbarItem(item, i) {
        expect(item.key).toBe(navItems[i].title)
        expect(item.props.className).toBe(`navbar-item ${navItems[i].title}-nav ${navItems[i].active ? "active" : ""}`)
      })
    });

    it("renders Navbar rwd correctly", () => {

      const { output } = setup()
      const [, right] = output.props.children
      const [, navbarRwd] = right.props.children
      expect(navbarRwd.props.children.props.className).toBe('navbar-rwd-button')

    })

    it("renders LangSelect correctly", () => {

      const { output } = setup()
      const [, right] = output.props.children
      const [, , langSelect] = right.props.children
      expect(langSelect.type).toBe(LangSelect)

    })
    it("renders SwipeableDrawer correctly", () => {

      const { output } = setup()
      const [, , swipeableDrawer] = output.props.children
      expect(swipeableDrawer.type).toBe(SwipeableDrawer)
      expect(swipeableDrawer.props.children.type).toBe(Box)

    })
    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})