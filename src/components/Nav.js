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
import homebutton from "../assets/logo192.png";
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
          // background: "linear-gradient(35deg, #2e2631 40%, #f5ab29 90%)",
          background: "#aeaeae",
        }}
      >
        <Toolbar>
          <Box m={2}>
            <Link activeClass="active" to="welcome" spy={true} smooth={true}>
              <img
                style={{
                  // borderRadius: 16,
                  // border: 1,
                  // display: "inline",
                  // alignItem: "center",
                  // justifyContent: "left",
                  // maxWidth: "500",
                  // height: "auto",
                  // works
                  maxHeight: "20px",
                  width: "auto",
                }}
                src={homebutton}
              ></img>
            </Link>
          </Box>
          <Box m={2}>
            <Link to="details" spy={true} smooth={true}>
              About
            </Link>
          </Box>
          <Box m={2}>
            <Link to="resume" spy={true} smooth={true}>
              Resume
            </Link>
          </Box>
          <Box m={2}>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Fade>
  );
}
