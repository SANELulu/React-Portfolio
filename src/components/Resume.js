import React from "react";
import { Typography, makeStyles, Box, Grid, Paper } from "@material-ui/core";
import { Fade } from "react-reveal";
const useStyles = makeStyles((theme) => ({
  center: {
    alignItems: "center",
  },
  paper: {
    height: "20rem",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Resume() {
  const classes = useStyles();
  return (
    <Fade bottom delay={900}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>RESUME</Paper>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default Resume;
