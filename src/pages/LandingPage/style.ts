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

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.lightTeal};
  color: white;
  width: 100%;
  height: 5rem;
  font-size: 1.5rem;
`;

export const Text = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`;