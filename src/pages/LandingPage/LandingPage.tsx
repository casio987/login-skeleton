import React from "react";
import { Banner, LoginContainer } from "./style";

const LandingPage = () => {
  return (
    <LoginContainer>
      <Banner>
        Login
      </Banner>
      <input placeholder="Username"></input>
      <input placeholder="Password"></input>
      <button>Login</button>
      <p>Not signed up? Sign up now!</p>
      <button>Login</button>
    </LoginContainer>
  )
}

export default LandingPage;