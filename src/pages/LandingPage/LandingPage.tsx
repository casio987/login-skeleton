import React from "react";
import { Button } from "../../components/button/Button";
import { palette } from "../../components/Palette";
import { Banner, InputSection, LoginContainer } from "./style";

const LandingPage = () => {
  return (
    <LoginContainer>
      <Banner>
        Login
      </Banner>
      <InputSection>
      {/* TODO: extract input to be another component with placeholder, length, height, font-size props? */}
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
      </InputSection>
      <Button
        backgroundColor={palette.lightTeal}
        width="5rem"
        color={palette.white}
      >
        Login
      </Button>
      <p>Not signed up? Sign up now!</p>
      <Button
        backgroundColor={palette.lightTeal}
        width="5rem"
        color={palette.white}
      >
        Sign Up
      </Button>
    </LoginContainer>
  )
}

export default LandingPage;