import styled from "styled-components";
import { palette } from "../Palette";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child):not(div) {
    margin-top: 0.75rem;
  }
`;

export const ErrorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1.5rem;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: ${palette.red};
  margin: 0;
`;

type InputProps = {
  placeholder: string;
  value: string;
  border?: string;
}

// TODO: add background image on error 
export const Input = styled.input<InputProps>`
  type: text;
  padding: 0.5rem 0.5rem;
  width: 15rem;
  placeholder: ${(props: InputProps) => (props.placeholder)};
  value: ${(props: InputProps) => (props.value)};
  border-radius: 0.25rem;
  border: ${(props: InputProps) => (props.border? props.border : "")}
`;
