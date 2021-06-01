import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { Fade } from "react-reveal";

import me from "../assets/lulu.jpg";
import Details from "../components/Details";

const useStyles = makeStyles((theme) => ({
  fullScreen: {
    //this is to make the welcome components a full screen component
    // width: "100vw",
    // height: "100vh",
    spacing: 0,
    justify: "space-around",

    //COLOR IS HERE VVVVVVVVVV
    background: "transparent",
    boxShadow: "none",
  },
}));
function Welcome() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      // alignItems="left"
      style={{
        background: "linear-gradient(180deg, #3c383e 60%, #232024 90%)",
      }}
    >
      <Grid item xs={6} sm={3}>
        <Box
          id="welcome"
          className={classes.fullScreen}
          boxShadow={3}
          m={1}
          p={1}
          style={{
            borderRadius: 16,
            border: 1,
          }}
        >
          <Fade delay={900}>
            <img
              style={{
                borderRadius: 16,
                border: 1,
                // works
                maxHeight: "600px",
                width: "auto",
              }}
              src={me}
            ></img>
          </Fade>
        </Box>
      </Grid>
      <Grid item xs={4} sm={4}>
        <Box m={1} pt={3}>
          {/* //////////// */}
          <Fade right delay={1300}>
            <Card
              style={{
                borderRadius: 16,
                border: 1,
                minWidth: "300px",
                maxWidth: "400px",
                raised: true,
                // background: "#aeaeae",
                background: "linear-gradient(-35deg, #6fabf6 10%, #9fd1f7 60%)",
                // width: "auto",
              }}
            >
              <CardActionArea>
                <CardContent
                // style={{
                //   background: "#aeaeae",
                // }}
                >
                  <Typography gutterBottom variant="body1" component="h2">
                    Hello,
                    <br />
                    my name is Lucas Díaz.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Programmer with a passion for design, learning, and
                    creation.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Fade>
          {/* //////// */}
        </Box>
        <Details />
        {/* <Details2 /> */}
      </Grid>
    </Grid>
  );
}

export default Welcome;
