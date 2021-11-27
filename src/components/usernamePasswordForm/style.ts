import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > *:not(:first-child) {
    margin-top: 0.75rem;
  }
`;