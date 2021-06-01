import React from "react";
import {
  Grid,
  makeStyles,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Fade } from "react-reveal";
import reactLogo from "../assets/reactlogo.png";
import htmlLogo from "../assets/html.png";
import jsLogo from "../assets/JavaScript-Logo.png";
import materialUiLogo from "../assets/material-ui.png";
import mongoLogo from "../assets/mongo.png";
import mysqlLogo from "../assets/mysqllogo.png";
import nodejsLogo from "../assets/node.png";
import PS from "../assets/photoshoplogo.png";
import AI from "../assets/AI.png";

const useStyles = makeStyles((theme) => ({
  details: {
    //this is to make the welcome components a full screen component
    // width: "100vw",
    // height: "100vh",
    // spacing: 0,
    // justify: "space-around",
    //COLOR IS HERE VVVVVVVVVV
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
function Tools() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              //   maxWidth: "50px",
              maxHeight: "50px",
              // height: "auto",
            }}
            src={reactLogo}
          ></img>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxWidth: "50px",
              // height: "auto",
            }}
            src={htmlLogo}
          ></img>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxWidth: "80px",
              // height: "auto",
            }}
            src={jsLogo}
          ></img>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxWidth: "50px",
              // height: "auto",
            }}
            src={materialUiLogo}
          ></img>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxWidth: "40px",
              // height: "auto",
            }}
            src={mongoLogo}
          ></img>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxHeight: "50px",
              // height: "auto",
            }}
            src={mysqlLogo}
          ></img>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxWidth: "50px",
              // height: "auto",
            }}
            src={nodejsLogo}
          ></img>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxWidth: "50px",
              // height: "auto",
            }}
            src={AI}
          ></img>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxWidth: "50px",
              // height: "auto",
            }}
            src={PS}
          ></img>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Tools;
