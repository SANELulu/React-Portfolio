import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
import { Fade } from "react-reveal";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import PreviousWorks from "./PreviousWorks";
// import gif1 from "";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  details: {
    //this is to make the welcome components a full screen component
    width: "100vw",
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
    // <Grid
    //   style={{
    //     background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
    //   }}
    // >
    <div>
      <Card
        style={{
          background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
          // background: "transparent",
          borderRadius: 0,
          border: 0,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Graduate from University of Miami Coding Bootcamp 2020-2021
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Previous Works:
            </Typography>
            <PreviousWorks />
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

export default Resume;
