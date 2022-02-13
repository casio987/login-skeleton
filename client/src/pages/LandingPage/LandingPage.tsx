import React, { useState } from "react";
import { Navbar, LandingPageContainer } from "./style";
import { AccountCircle, Logout, Person } from "@mui/icons-material";
import { Menu, IconButton, MenuItem } from "@mui/material";
import { useHistory } from "react-router-dom";
import { getUser } from "../../api/users";

const LandingPage = () => {
  const history = useHistory();
  
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<String>("");

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  }

  const handleLogout = () => {
    sessionStorage.setItem(process.env.REACT_APP_TOKEN!, "");
    history.push("/");
  }

  const handleProfileClick = async () => {
    try {
      const { status, userDetails } = await getUser();
      if (status === 201) {
        setUsername(userDetails.username);
      }
    } catch (err) {
      sessionStorage.setItem(process.env.REACT_APP_TOKEN!, "");
      history.push("/");
    }
  }

  return (
    <LandingPageContainer>
      <Navbar data-testid="landing-page-navbar">
        <IconButton
          onClick={handleMenuOpen}
        >
          <AccountCircle 
            data-testid="landing-page-account-icon"
            sx={{ fontSize: 50, color: "white"}}
          />
        </IconButton>
        <Menu
          open={menuOpen}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
        >
          {/* TODO: clean this up a bit? and add onclick functionality*/}
          <MenuItem onClick={handleProfileClick}>
            <Person sx={{ marginRight: "0.5rem" }} /> Profile 
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Logout sx={{ marginRight: "0.5rem" }} /> Logout 
          </MenuItem>
        </Menu>
      </Navbar>
      {!!username ? (
        <div>
          Token still valid and username received is {username}
        </div>
      ): null}
    </LandingPageContainer>
  );
};

export default LandingPage;