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
import gif1 from "../assets/covid-clean-gif.gif";
import gif2 from "../assets/weatherApp.gif";
import gif3 from "../assets/Project2App.gif";
import gif4 from "../assets/techBlog.gif";
import gif5 from "../assets/expressNoteTakerApp.gif";
import gif6 from "../assets/employeeDirectory.gif";

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
    <Grid
      style={{
        background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
      }}
    >
      <Box p={1}>
        <Card
        // className={classes.details}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Graduate from University of Miami Coding Bootcamp 2020-2021
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Previous Works:
              </Typography>

              {/* <img
                style={{
                  borderRadius: 16,
                  border: 1,
                  // works
                  maxHeight: "200px",
                  width: "auto",
                }}
                src={gif1}
              ></img>
              <img
                style={{
                  borderRadius: 16,
                  border: 1,
                  // works
                  maxHeight: "200px",
                  width: "auto",
                }}
                src={gif2}
              ></img>
              <img
                style={{
                  borderRadius: 16,
                  border: 1,
                  // works
                  maxHeight: "300px",
                  width: "auto",
                }}
                src={gif3}
              ></img>
              <img
                style={{
                  borderRadius: 16,
                  border: 1,
                  // works
                  maxHeight: "300px",
                  width: "auto",
                }}
                src={gif4}
              ></img>
              <img
                style={{
                  borderRadius: 16,
                  border: 1,
                  // works
                  maxHeight: "300px",
                  width: "auto",
                }}
                src={gif5}
              ></img>
              <img */}
              {/* style={{
                  borderRadius: 16,
                  border: 1,
                  // works
                  maxHeight: "00px",
                  width: "auto",
                }}
                src={gif6}
              ></img> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}

export default Resume;

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// <Grid container direction="row" justify="space-evenly" alignItems="center">
//   <Grid item xs={12}>
//     <Fade left delay={900}>
//       <Box
//         id="resume"
//         className={classes.details}
//         ////////////
//         boxShadow={3}
//         m={1}
//         p={1}
//       >
{
  /* <img src={logo} alt="loading..." /> */
}
//       </Box>
//     </Fade>
//   </Grid>
//   <Grid item xs={12}>
//     <Fade right delay={900}>
//       <Box
//         className={classes.details}
//         ////////////
//         boxShadow={3}
//         m={1}
//         p={1}
//       >
//         RESUME 2
//       </Box>
//     </Fade>
//   </Grid>
// </Grid>;
