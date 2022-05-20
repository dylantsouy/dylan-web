import React from "react";
import BottomTop from "./BottomTop";
import { cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import ClickBtn from "../common/ClickBtn";

afterEach(cleanup);

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<BottomTop color="white" />)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}


describe('components common', () => {
  describe('BottomTop', () => {
    it("renders with correct", () => {
      const { output } = setup()
      expect(output.props.className).toBe('bottom-top')
    });

    it("renders bg-shape correctly", () => {
      const { output } = setup()
      const [bgShape] = output.props.children
      expect(bgShape.props.className).toBe('bg-shape')
      const [LeftPic, RightPic] = bgShape.props.children
      // LeftPic
      expect(LeftPic.type).toBe('img')
      expect(LeftPic.props.className).toBe('shape-left')
      expect(LeftPic.props.src).toBe('left-pic.png')
      // RightPic
      expect(RightPic.type).toBe('img')
      expect(RightPic.props.className).toBe('shape-right')
      expect(RightPic.props.src).toBe('right-pic.png')
    });

    it("renders bottom-top-inner correctly", () => {
      const { output } = setup()
      const [, bottomTopInner] = output.props.children
      const { children } = bottomTopInner.props
      expect(children.props.className).toBe('bottom-top-inner row align-items-center')
      const [LeftArea, RightArea] = children.props.children
      // LeftArea
      expect(LeftArea.props.className).toBe('left-area')
      const {children : bottomTopHeading} = LeftArea.props
      expect(bottomTopHeading.props.className).toBe('bottomTop-heading pixFadeUp')
      const [title,subTitle] = bottomTopHeading.props.children
      expect(title.type).toBe('h2')
      expect(title.props.className).toBe('title')
      expect(subTitle.type).toBe('p')
      expect(subTitle.props.children).toBe('感謝您的造訪。')
      // RightArea
      expect(RightArea.props.className).toBe('right-area')
      expect(RightArea.props.children.type).toBe(ClickBtn)
    });

    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})