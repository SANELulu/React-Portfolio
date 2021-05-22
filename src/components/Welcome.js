import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import { Fade } from "react-reveal";
const useStyles = makeStyles((theme) => ({
  fullScreen: {
    width: "100vw",
    height: "100vh",
    spacing: 0,
    justify: "space-around",
  },
}));
function Welcome() {
  const classes = useStyles();

  return (
    <Fade left delay={900}>
      <Box
        className={classes.fullScreen}
        bgcolor="background.primary"
        // boxShadow={3}
        // m={1}
        // p={1}
      >
        WELCOME
      </Box>
    </Fade>
  );
}

export default Welcome;
