import { Banner } from "./Banner";
import { render } from "@testing-library/react";
import { palette } from "../Palette";

describe("Banner", () => {
  it("should render with default style", () => {
    const { getByText } = render(<Banner>Title</Banner>);
    expect(getByText("Title"))
      .toHaveStyle(`height: 5rem; background-color: ${palette.indigo}; color: ${palette.white}; font-size: 1.5rem`);
  });

  it("should render with specified height", () => {
    const { getByText } = render(<Banner height="100rem">Title</Banner>);
    expect(getByText("Title"))
      .toHaveStyle(`height: 100rem; background-color: ${palette.indigo}; color: ${palette.white}; font-size: 1.5rem`);
  });

  it("should render with specified color options", () => {
    const { getByText } = render(<Banner backgroundColor={palette.lightTeal} color={palette.red}>Title</Banner>);
    expect(getByText("Title"))
      .toHaveStyle(`height: 5rem; background-color: ${palette.lightTeal}; color: ${palette.red}; font-size: 1.5rem`);
  });

  it("should render with specified font size", () => {
    const { getByText } = render(<Banner fontSize="99rem">Title</Banner>);
    expect(getByText("Title"))
      .toHaveStyle(`height: 5rem; background-color: ${palette.indigo}; color: ${palette.white}; font-size: 99rem`);
  });
})