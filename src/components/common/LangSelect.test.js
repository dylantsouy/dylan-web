import React from "react";
import LangSelect from "./LangSelect";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { createRenderer } from 'react-test-renderer/shallow';

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<LangSelect />)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}

afterEach(cleanup);

describe('components common', () => {
  describe('LangSelect', () => {
    it("renders with correct", () => {
      const { output } = setup()
      expect(output.type).toBe('div')
      expect(output.props.className).toBe('langSelect')
    });

    it("should render langBtn and default flag", () => {
      const { output } = setup()
      // should langBtn render correct
      const [langBtn] = output.props.children
      expect(langBtn.props.className).toBe('langBtn')
      // should flagIcon render correct
      const flagIcon = langBtn.props.children
      expect(flagIcon.type).toBe('span')
      expect(flagIcon.props.className).toBe('flag-icon flag-icon-tw')
    });

    it("should render LangMenu correct", () => {
      const langOptions = ['us', 'tw']
      const { output } = setup()
      const [, langMenu] = output.props.children;
      expect(langMenu.props.defaultValue).toBe('tw')
      // should options render correct
      expect(langMenu.props.children.length).toBe(2)
      langMenu.props.children.forEach(function checkOptions(option, i) {
        expect(option.key).toBe(langOptions[i])
        expect(option.props.value).toBe(langOptions[i])
      });
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<LangSelect />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })
})