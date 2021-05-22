import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles((theme) => ({
  center: {
    alignItems: "center",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Fade top>
      <AppBar position="sticky" className={classes.center}>
        <Toolbar>
          <Box m={2}>1</Box>
          <Box m={2}>2</Box>
          <Box m={2}>3</Box>
          <Box m={2}>4</Box>
        </Toolbar>
      </AppBar>
    </Fade>
  );
}
