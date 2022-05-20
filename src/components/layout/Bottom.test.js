import React from "react";
import Bottom from "./Bottom";
import { cleanup } from "@testing-library/react";
import { createRenderer } from 'react-test-renderer/shallow';

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<Bottom />)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}

afterEach(cleanup);

describe('components common', () => {
  describe('Bottom', () => {
    it("renders with correctly", () => {
      const { output } = setup()
      expect(output.type).toBe('div')
      expect(output.props.className).toBe('bottom')
    });

    it("should render bottom-logo correctly", () => {
      const { output } = setup()
      const [bottomLogo] = output.props.children
      expect(bottomLogo.props.className).toBe('bottom-logo')
      // should render logo
      const { children: logo } = bottomLogo.props;
      expect(logo.type).toBe('img')
      expect(logo.props.src).toBe('logo.png')
    });

    it("should render bottom-copyright correctly", () => {
      const { output } = setup()
      const [, bottomCopyright] = output.props.children;
      expect(bottomCopyright.props.className).toBe('bottom-copyright')
      expect(bottomCopyright.props.children).toBe('版權所有 © 2021 鄒富顏 版權所有。')
    });

    it("should render bottom-right correctly", () => {
      const tooltips = [
        { title: 'Github', href: 'https://github.com/dylantsouy' },
        { title: 'Facebook', href: 'https://www.facebook.com/fu.y.zou' },
        { title: 'Email to me', href: 'mailto:bear817005@gmail.com' }
      ]
      const { output } = setup()
      const [, , bottomRight] = output.props.children;
      expect(bottomRight.props.className).toBe('bottom-right')
      const { children: rightChildren } = bottomRight.props
      expect(rightChildren.length).toBe(3)
      const [logoRwd, links, copyrightRwd] = rightChildren;
      // check logoRwd
      expect(logoRwd.props.className).toBe('bottom-logo-rwd')
      expect(logoRwd.props.children.type).toBe('img')
      expect(logoRwd.props.children.props.src).toBe('logo.png')
      // check link
      expect(links.props.className).toBe('bottom-link');
      links.props.children.forEach(function checkFilter(link, i) {
        const { children: linkInner } = link.props
        expect(link.props.placement).toBe('top')
        expect(link.props.title).toBe(tooltips[i].title)
        expect(linkInner.props.href).toBe(tooltips[i].href)
        expect(linkInner.props.target).toBe('_blank')
      })
      // check copyrightRwd
      expect(copyrightRwd.props.className).toBe('bottom-copyright-rwd')
      expect(copyrightRwd.props.children).toBe('版權所有 © 2021 鄒富顏 版權所有。')

    });
    it("matches snapshot", () => {
      const { output } = setup()
      expect(output).toMatchSnapshot();
    });
  })
})