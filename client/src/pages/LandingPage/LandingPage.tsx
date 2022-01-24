import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, LandingPageContainer } from "./style";
import { AccountCircle, Logout } from "@mui/icons-material";
import { Menu, IconButton, MenuItem } from "@mui/material";

const LandingPage = () => {
  const { location } = useHistory();
  const user = location.state;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(user);
  });

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
          onClose={handleMenuClose}
        >
          <MenuItem>Logout</MenuItem>
        </Menu>
        
      </Navbar>
    </LandingPageContainer>
  );
};

export default LandingPage;