import React from "react";
import { Typography, makeStyles, Box, Grid, Paper } from "@material-ui/core";
import { Fade } from "react-reveal";
const useStyles = makeStyles((theme) => ({
  center: {
    alignItems: "center",
  },
  paper: {
    height: "15rem",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Details() {
  const classes = useStyles();
  return (
    <Fade left delay={900}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>DETAILS 1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>DETAILS 2</Paper>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default Details;
