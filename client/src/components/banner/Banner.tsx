import { styled } from "@mui/system"
import { palette } from "../../components/Palette";

type BannerProps = {
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
}

export const Banner = styled('div')<BannerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: BannerProps) => (props.backgroundColor ? props.backgroundColor : palette.indigo)};
  color: ${(props: BannerProps) => (props.color ? props.color : palette.white)};
  width: 100%;
  height: ${(props: BannerProps) => (props.height ? props.height : "5rem")};
  font-size: ${(props: BannerProps) => (props.fontSize ? props.fontSize : "1.5rem")};
`;