import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import MenuBar from "./MenuBar";
import NavbarItem from "./NavbarItem";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ background: "white" }}>
      <Container>
        <Box position="static">
          <Box maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: {
                    xs: "none",
                    md: "flex",
                    color: "#1E0E62",
                    fontWeight: 900,
                    fontSize: "24px",
                  },
                }}
              >
                Devwear
              </Typography>

              {/* menu start */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "#1E0E62",
                  fontSize: "24px",
                  fontWeight: 900,
                  display: {
                    xs: "flex",
                    md: "none",
                    justifyContent: "start",
                  },
                }}
              >
                Devwear
              </Typography>
              <MenuBar
                anchorElNav={anchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
                handleOpenNavMenu={handleOpenNavMenu}
              ></MenuBar>

              {/* menu end */}

              {/* navbar item start */}
              <NavbarItem handleCloseNavMenu={handleCloseNavMenu}> </NavbarItem>
              {/* navbar item end  */}

              <Box
                sx={{
                  mr: 2,
                  display: {
                    xs: "none",
                    md: "flex",
                    columnGap: "20px",
                  },
                }}
              >
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
              </Box>
            </Toolbar>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default ResponsiveAppBar;
