import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NavbarItem = ({ handleCloseNavMenu }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: "none",
          md: "flex",
          justifyContent: "center",
          columnGap: "30px",
        },
      }}
    >
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#1E0E62",
          display: "block",
          textTransform: "capitalize",
          fontSize: "16px",
        }}
      >
        Home
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#1E0E62",
          display: "block",
          textTransform: "capitalize",
          fontSize: "16px",
        }}
      >
        Features
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#1E0E62",
          display: "block",
          textTransform: "capitalize",
          fontSize: "16px",
        }}
      >
        Blog
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#1E0E62",
          display: "block",
          textTransform: "capitalize",
          fontSize: "16px",
        }}
      >
        Shop
      </Button>
    </Box>
  );
};

export default NavbarItem;
