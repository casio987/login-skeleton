import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, LandingPageContainer } from "./style";
import { AccountCircle, Logout, Settings, Person } from "@mui/icons-material";
import { Menu, IconButton, MenuItem } from "@mui/material";
import { IRegisterResponseBody } from "../../interfaces/IResponses";

const LandingPage = () => {
  const history = useHistory();
  const user = history.location.state as IRegisterResponseBody;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  }

  return (
    <LandingPageContainer>
      <Navbar>
        <IconButton
          onClick={handleMenuOpen}
        >
          <AccountCircle 
            sx={{ fontSize: 50, color: "white"}}
          />
        </IconButton>
        <Menu
          open={menuOpen}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
        >
          {/* TODO: clean this up a bit? and add onclick functionality*/}
          <MenuItem>
            <Person sx={{ marginRight: "0.5rem" }} /> Profile 
          </MenuItem>
          <MenuItem>
            <Settings sx={{ marginRight: "0.5rem" }} /> Settings 
          </MenuItem>
          <MenuItem>
            <Logout sx={{ marginRight: "0.5rem" }} /> Logout 
          </MenuItem>
        </Menu>
      </Navbar>
      <div>
        Welcome {user.username}
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;