import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Fade } from "react-reveal";
import gif1 from "../assets/covid-clean-gif.gif";
import gif2 from "../assets/weatherApp.gif";
import gif3 from "../assets/Project2App.gif";
import gif5 from "../assets/expressNoteTakerApp.gif";
import gif6 from "../assets/employeeDirectory.gif";
import githubLogo from "../assets/github.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function PreviousWorks() {
  const classes = useStyles();

  const redirectCovid = () => {
    // console.log("hittin");
    window.open("https://github.com/SANELulu/Covid-Clean", "_blank");
    // window.location.href = "https://github.com/SANELulu";
  };
  const redirectWeather = () => {
    // console.log("hittin");
    window.open("https://github.com/SANELulu/Weather-Dashboard", "_blank");
    // window.location.href = "https://github.com/SANELulu";
  };
  const redirectMovie = () => {
    // console.log("hittin");
    window.open("https://github.com/SANELulu/Movie_Profile_App", "_blank");
    // window.location.href = "https://github.com/SANELulu";
  };
  const redirectExpress = () => {
    // console.log("hittin");
    window.open("https://github.com/SANELulu/Expess_Note_Taker_App", "_blank");
    // window.location.href = "https://github.com/SANELulu";
  };
  const redirectEmployee = () => {
    // console.log("hittin");
    window.open(
      "https://github.com/SANELulu/React-Employee-Directory",
      "_blank"
    );
    // window.location.href = "https://github.com/SANELulu";
  };

  return (
    <div className={classes.root}>
      <Fade cascade left>
        <Accordion
          style={{
            background: "linear-gradient(-35deg, #6fabf6 10%, #9fd1f7 60%)",
            // background: "transparent",
            borderRadius: 16,
            border: 1,
            margin: "10px",
            // boxShadow: "0 1px 5px 1px ",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="overline" className={classes.heading}>
              CleanMind
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              style={{
                borderRadius: 16,
                border: 1,
                // works
                // maxWidth: "500px",
                maxHeight: "400px",
              }}
              src={gif1}
            ></img>
            <Typography
              style={{
                padding: "25px",
              }}
              variant="caption"
            >
              Once signed in, this App will allow you to rate, leave comments
              and browse previous comments and ratings, for local restaurants in
              your area. Simply click on one of the restaurants and the user
              will be directed to a map view, with a marker for said resturant
              in the area with it's pinned location. This view will give the
              user acces to the covid cases count and recoverd cases to date in
              the states, as wel as a chart of the vaccine rates since april
              till current date. The App will provide a sense of security, for
              patrons trying to go out to dine and drink in this rapid changing
              setting, of a recovering world, and help us get back to enjoying
              our lives safely.
              <br />
              <br />
              Tech used:
              <ul>
                <li>node</li>
                <li>react</li>
                <li>material-ui</li>
                <li>bcrypt</li>
                <li>dotenv</li>
                <li>express</li>
                <li>jsonwebtoken</li>
                <li>mongoose</li>
                <li>atlas</li>
                <li>heroku</li>
                <li>react-chartjs</li>
                <li>mapboxgl</li>
                <li>axios</li>
                <li>numeral</li>
                <li>react-reveal</li>
              </ul>
              <img
                style={{
                  maxWidth: "30px",
                }}
                src={githubLogo}
                onClick={redirectCovid}
              ></img>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            background: "linear-gradient(-35deg, #6fabf6 10%, #9fd1f7 60%)",
            // background: "transparent",
            borderRadius: 16,
            border: 1,
            margin: "10px",
            // boxShadow: "0 1px 5px 1px ",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="overline" className={classes.heading}>
              Weather App
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              style={{
                borderRadius: 16,
                border: 1,
                // works
                maxWidth: "400px",
                // width: "auto",
              }}
              src={gif2}
            ></img>
            <Typography
              style={{
                padding: "25px",
              }}
              variant="caption"
            >
              Weather Dashboard using OpenWeather One Call API
              <br />
              <br />
              Tech used:
              <ul>
                <li>bootstrap</li>
                <li>Openweather API</li>
              </ul>
              <img
                style={{
                  maxWidth: "30px",
                }}
                src={githubLogo}
                onClick={redirectWeather}
              ></img>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            background: "linear-gradient(-35deg, #6fabf6 10%, #9fd1f7 60%)",
            // background: "transparent",
            borderRadius: 16,
            border: 1,
            margin: "10px",
            // boxShadow: "0 1px 5px 1px ",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="overline" className={classes.heading}>
              Movie App
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              style={{
                borderRadius: 16,
                border: 1,
                // works
                maxWidth: "400px",
                height: "300px",
              }}
              src={gif3}
              onClick={redirectMovie}
            ></img>
            <Typography
              style={{
                padding: "25px",
              }}
              variant="caption"
            >
              Creates a user profile for adding movies to a "watch list". Upon
              creating the profile user will have access to a search bar for a
              movies API. As the user searches and adds to profile, user profile
              will update the list, as the user watches said movies on list. App
              will display top watched movies, on API, which user can add and
              store to personal list.
              <br />
              <br />
              Tech used:
              <br />
              <ul>
                <li>node</li>
                <li>bcrypt</li>
                <li>dotenv</li>
                <li>express</li>
                <li>Movie DB API</li>
                <li>axios</li>
                <li>heroku</li>
                <li>mapboxgl</li>
                <li>express handlebars</li>
                <li>jquery</li>
                <li>mysql</li>
              </ul>
              <Grid alignItems="flex-end">
                <img
                  style={{
                    maxWidth: "30px",
                  }}
                  src={githubLogo}
                ></img>
              </Grid>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            background: "linear-gradient(-35deg, #6fabf6 10%, #9fd1f7 60%)",
            // background: "transparent",
            borderRadius: 16,
            border: 1,
            margin: "10px",
            // boxShadow: "0 1px 5px 1px ",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="overline" className={classes.heading}>
              Express Note Taker
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              style={{
                borderRadius: 16,
                border: 1,
                // works
                maxWidth: "400px",
                // width: "auto",
              }}
              src={gif5}
            ></img>
            <Typography
              style={{
                padding: "25px",
              }}
              variant="caption"
            >
              Simple Note Taker App using Express js
              <br />
              <br />
              Tech used:
              <br />
              <ul>
                <li>express</li>
                <li>node</li>
                <li>uuid</li>
              </ul>
              <img
                style={{
                  maxWidth: "30px",
                }}
                src={githubLogo}
                onClick={redirectExpress}
              ></img>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            background: "linear-gradient(-35deg, #6fabf6 10%, #9fd1f7 60%)",
            // background: "transparent",
            borderRadius: 16,
            border: 1,
            margin: "10px",
            // boxShadow: "0 1px 5px 1px ",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="overline" className={classes.heading}>
              Employee Directory
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              style={{
                borderRadius: 16,
                border: 1,
                // works
                maxWidth: "400px",
                // width: "auto",
              }}
              src={gif6}
            ></img>
            <Typography
              style={{
                padding: "25px",
              }}
              variant="caption"
            >
              Employee Directory using react-table Randomly generated users can
              be filteres according to the users selected column as well as
              search users.
              <br />
              <br />
              <ul>
                <li>bootstrap</li>
                <li>js</li>
                <li>react</li>
              </ul>
              <img
                style={{
                  maxWidth: "30px",
                }}
                src={githubLogo}
                onClick={redirectEmployee}
              ></img>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Fade>
    </div>
  );
}
export default PreviousWorks;
