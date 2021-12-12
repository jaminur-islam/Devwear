import React, { useState } from "react";
import { Button, Container, Grid, Slider } from "@mui/material";
import banner_img from "../../img/bannerMan.png";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
const Banner = () => {
  const [num, setNumber] = useState({});
  const handleNumber = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newNumber = { ...num };
    newNumber[field] = value;
    setNumber(newNumber);
  };

  return (
    <Container className="banner-container">
      <Box>
        <Grid container className="banner-content">
          <Grid item md={6} className="banner_left_side">
            <h1>
              The developer <br /> shop in your Hub{" "}
            </h1>
            <p>
              DevWear prints a huge variety of custom clothing like T-shirts,
              hoodies and more, Your order is handled daily with a lot of love
              from BANGLADESH and delivered worldwide!
            </p>
            <Button variant="contained">
              <i className="fab fa-accessible-icon"></i>
              Shop Now{" "}
            </Button>
          </Grid>

          <Grid
            item
            md={6}
            className="banner_right_side"
            sx={{ border: "2px solid green", position: "relative" }}
          >
            <img src={banner_img?.src} className="banner_img" alt="" />
            <Paper
              sx={{
                width: "240px",
                height: "320px",
                position: "absolute",
                top: "90px",
                left: "110px",
                borderRadius: "30px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <FolderIcon
                sx={{ color: "#8743FF", width: "30px", zIndex: -1 }}
              />
              <h3 style={{ color: "black" }}> File Uploading ...</h3>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "40px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <InsertDriveFileOutlinedIcon
                  sx={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h4>design.psd </h4>
                  <Slider
                    name="first"
                    sx={{ color: "#4136F1 " }}
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleNumber}
                  />
                </div>
                <span> {num.first === 0 || num.first ? num.first : 70}% </span>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "40px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <InsertDriveFileOutlinedIcon
                  sx={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h4>resume.docs </h4>
                  <Slider
                    name="second"
                    sx={{ color: "#4136F1 " }}
                    size="small"
                    defaultValue={32}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleNumber}
                  />
                </div>
                <span>
                  {num.second === 0 || num.second ? num.second : 32}%{" "}
                </span>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "40px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <InsertDriveFileOutlinedIcon
                  sx={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h4>message.docs </h4>
                  <Slider
                    name="third"
                    sx={{ color: "#4136F1 " }}
                    size="small"
                    defaultValue={21}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleNumber}
                  />
                </div>
                <span> {num.third === 0 || num.third ? num.third : 21}% </span>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
