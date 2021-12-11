import React from "react";
import {
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

const MenuBar = ({ anchorElNav, handleCloseNavMenu, handleOpenNavMenu }) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none", justifyContent: "space-between" },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon sx={{ fontSize: "35px" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem
          onClick={handleCloseNavMenu}
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <Link sx={{ color: "#1E0E62", textDecoration: "none" }}> Home </Link>
          <Link sx={{ color: "#1E0E62", textDecoration: "none" }}>
            Features
          </Link>
          <Link sx={{ color: "#1E0E62", textDecoration: "none" }}> Blog </Link>
          <Link sx={{ color: "#1E0E62", textDecoration: "none" }}> Shop </Link>
          <Link
            sx={{
              fontSize: "16px",
              fontWeight: 800,
              padding: " 6px 20px",
              textDecoration: "none",
              color: "#1E0E62",
            }}
          >
            Sing Up
          </Link>
          <Link
            sx={{
              fontSize: "16px",
              background: "#2F80ED",
              padding: " 6px 20px",
              color: "white",
              borderRadius: "20px",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sing In
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MenuBar;
