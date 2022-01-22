import styled from "styled-components";

type ButtonProps = {
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    height?: string;
    width?: string;
    border?: string;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => (props.backgroundColor ? props.backgroundColor : "white")};
    color: ${(props: ButtonProps) => (props.color ? props.color : "black")};
    font-size: ${(props: ButtonProps) => (props.fontSize ? props.fontSize : "1rem")};
    height: ${(props: ButtonProps) => (props.height ? props.height : "3rem")};
    width: ${(props: ButtonProps) => (props.width ? props.width : "100%")};    
    border: ${(props: ButtonProps) => (props.border ? props.border : "none")};
    border-radius: 0.5rem;
`;