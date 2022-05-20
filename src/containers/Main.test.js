import React from "react";
import { cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import Main from "./Main";
import About from "../components/main/About";
import Banner from "../components/main/Banner";
import Skill from "../components/main/Skill";
import Project from "../components/main/Project";
import TwoIntro from "../components/main/TwoIntro";
import Contact from "../components/main/Contact";

afterEach(cleanup);

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<Main />)
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
      // check components
      const [BannerEl, AboutEl, SkillEl, ProjectEl, TwoIntroEl, ContactEl] = output.props.children
      expect(BannerEl.type).toBe(Banner);
      expect(AboutEl.type).toBe(About);
      expect(SkillEl.type).toBe(Skill);
      expect(ProjectEl.type).toBe(Project);
      expect(TwoIntroEl.type).toBe(TwoIntro);
      expect(ContactEl.type).toBe(Contact);
    });

    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})