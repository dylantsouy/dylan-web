import React from "react";
import LangSelect from "./LangSelect";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { IconButton } from "@mui/material";
import { cleanup } from "@testing-library/react";
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
      // should langBtn render correctly
      const [langBtn] = output.props.children
      expect(langBtn.type).toBe(IconButton)
      expect(langBtn.props.className).toBe('langBtn')
      // should flagIcon render correctly
      const flagIcon = langBtn.props.children
      expect(flagIcon.type).toBe('span')
      expect(flagIcon.props.className).toBe('flag-icon flag-icon-tw')
    });

    it("should render LangMenu correctly", () => {
      const langOptions = ['us', 'tw']
      const { output } = setup()
      const [, langMenu] = output.props.children;
      expect(langMenu.type).toBe(Select)
      expect(langMenu.props.defaultValue).toBe('tw')
      // should options render correctly
      expect(langMenu.props.children.length).toBe(2)
      langMenu.props.children.forEach(function checkOptions(option, i) {
        expect(option.type).toBe(MenuItem)
        expect(option.key).toBe(langOptions[i])
        expect(option.props.value).toBe(langOptions[i])
      });
    });

    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})