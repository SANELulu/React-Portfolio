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
function Details() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      style={{
        // background: "#aeaeae",
        background: "transparent",
        // background: "linear-gradient(180deg, #2a292b 60%, #f5ab29 90%)",
      }}
    >
      <Grid item xs={6}>
        <Box
          // className={classes.details}
          ////////////
          // boxShadow={3}
          m={1}
          // p={1}
        >
          <Fade right delay={900}>
            <Card
              className={classes.root}
              style={{
                borderRadius: 16,
                border: 1,
                background: "#aeaeae",
              }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  TEXT
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Fade>
        </Box>
      </Grid>
      {/* <Grid item xs={6}>
        <Fade right delay={900}>
          <Box
            // className={classes.details}
            ////////////
            // boxShadow={3}
            m={2}
            // p={1}
          >
            <Fade right delay={900}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="h2">
                    TEXT
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    adjective
                  </Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Fade>
          </Box>
        </Fade>
      </Grid> */}
    </Grid>
  );
}

export default Details;
