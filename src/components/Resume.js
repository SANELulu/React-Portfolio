import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
import { Fade } from "react-reveal";
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
}));
function Resume() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item xs={12}>
        <Fade left delay={900}>
          <Box
            className={classes.details}
            ////////////
            boxShadow={3}
            m={1}
            p={1}
          >
            RESUME 1
          </Box>
        </Fade>
      </Grid>
      <Grid item xs={12}>
        <Fade right delay={900}>
          <Box
            className={classes.details}
            ////////////
            boxShadow={3}
            m={1}
            p={1}
          >
            RESUME 2
          </Box>
        </Fade>
      </Grid>
    </Grid>
  );
}

export default Resume;
