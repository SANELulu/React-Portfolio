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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
                background: "linear-gradient(-35deg, #6fabf6 10%, #9fd1f7 60%)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  Inspirations:
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Cinema, technology, graphic arts and videogames.
                </Typography>
              </CardContent>
              <CardActions>
                <Accordion
                  style={{
                    background: "transparent",

                    borderRadius: 16,
                    border: 1,
                    margin: "10px",
                    boxShadow: "0 0px 0px 0px ",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Button size="small">Learn More</Button>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography
                      style={{
                        fontSize: 10,
                      }}
                      variant="caption"
                      align="left"
                    >
                      Some of my Favorites:
                      <ul>
                        <li>Holy Mountain (1973)</li>
                        <li>Enter The Void (2009)</li>
                        <li>2001: A Space Odyssey (1968)</li>
                        <li>Stalker (1979)</li>
                        <li>Nier: Automata</li>
                        <li>Devil May Cry 3</li>
                        <li>We ❤ Katamari</li>
                        <li>Final Fantasy X</li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardActions>
            </Card>
          </Fade>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Details;
