import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  center: {
    alignItems: "center",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Fade top delay={2200}>
      <AppBar
        position="static"
        className={classes.center}
        style={{
          borderRadius: 16,
          border: 1,
          background: "linear-gradient(-35deg, #6b65bd 10%, #3f3c68 60%)",
          // background: "#aeaeae",
        }}
      >
        <Toolbar>
          <Box m={2}>
            <Typography
              style={{
                fontSize: 10,
              }}
              variant="overline"
            >
              <Link activeClass="active" to="welcome" spy={true} smooth={true}>
                Welcome
              </Link>
            </Typography>
          </Box>
          <Box m={2}>
            <Typography
              style={{
                fontSize: 10,
              }}
              variant="overline"
            >
              <Link activeClass="active" to="welcome" spy={true} smooth={true}>
                About
              </Link>
            </Typography>
          </Box>
          <Box m={2}>
            <Typography
              style={{
                fontSize: 10,
              }}
              variant="overline"
            >
              <Link activeClass="active" to="footer" spy={true} smooth={true}>
                Resume
              </Link>
            </Typography>
          </Box>
          <Box m={2}>
            <Typography
              style={{
                fontSize: 10,
              }}
              variant="overline"
            >
              <Link activeClass="active" to="footer" spy={true} smooth={true}>
                Contact
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Fade>
  );
}
