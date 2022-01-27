import { styled } from "@mui/system";

export const LoginContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > *:not(:first-child) {
    margin-top: 0.75rem;
  }
`;



