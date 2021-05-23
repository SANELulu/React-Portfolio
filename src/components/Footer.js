import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import { Fade } from "react-reveal";
const useStyles = makeStyles((theme) => ({
  details: {
    //this is to make the welcome components a full screen component
    // width: "100vw",
    // height: "100vh",
    // spacing: 0,
    // justify: "space-around",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <Fade bottom delay={900}>
      <Box
        className={classes.details}
        ////////////
        boxShadow={3}
        m={1}
        p={1}
      >
        FOOTER
      </Box>
    </Fade>
  );
}

export default Footer;
