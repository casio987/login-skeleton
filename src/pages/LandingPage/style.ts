import styled from "styled-components";
import { palette } from "../../components/siteLayout/Palette";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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


