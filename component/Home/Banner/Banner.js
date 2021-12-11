import React from "react";
import { Button, Container, Grid } from "@mui/material";
import banner_img from "../../img/bannerMan.png";
import { Box } from "@mui/system";
console.log(banner_img);
const Banner = () => {
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Box>
        <Grid container>
          <Grid item>
            <h1 style={{ fontSize: "50px" }}>
              The developer <br /> shop in your Hub{" "}
            </h1>
            <p>
              DevWear prints a huge variety of custom clothing like T-shirts,
              hoodies and more, Your order is handled daily with a lot of love
              from BANGLADESH and delivered worldwide!
            </p>
            <Button variant="contained"> Shop Now </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
