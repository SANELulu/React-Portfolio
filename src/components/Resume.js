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
import Tools from "./Tools";
import PreviousWorks from "./PreviousWorks";
import miamiLogo from "../assets/miami.png";
import Footer from "./Footer";
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
    <div>
      <Card
        style={{
          background: "linear-gradient(180deg, #232024 60%, #201f21 90%)",
          // background: "transparent",
          borderRadius: 0,
          border: 0,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="overline"
              component="h2"
              align="center"
              color="primary"
            >
              Graduate from University of Miami Fullstack Coding Bootcamp
              2020-2021
              <Grid alignItems="right">
                <img
                  style={{
                    maxHeight: "20px",
                  }}
                  src={miamiLogo}
                ></img>
              </Grid>
            </Typography>
            <Tools />
            <Typography variant="body2" color="primary" component="p">
              Previous Works:
            </Typography>
            <PreviousWorks />
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
        <Footer />
      </Card>
    </div>
  );
}

export default Resume;
