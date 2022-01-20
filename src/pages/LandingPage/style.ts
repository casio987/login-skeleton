import styled from "styled-components";
import { palette } from "../../components/Palette";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > *:not(:first-child) {
    margin-top: 0.75rem;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${palette.lightTeal};
  width: 100%;
  height: 5rem;

  & > * {
    margin-right: 2.5rem;
  }
`;