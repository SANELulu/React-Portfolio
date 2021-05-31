import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import gif1 from "../assets/covid-clean-gif.gif";
import gif2 from "../assets/weatherApp.gif";
import gif3 from "../assets/Project2App.gif";
import gif4 from "../assets/techBlog.gif";
import gif5 from "../assets/expressNoteTakerApp.gif";
import gif6 from "../assets/employeeDirectory.gif";
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

  return (
    <div className={classes.root}>
      <Accordion
        style={{
          // background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
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
          <Typography className={classes.heading}>CleanMind</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxHeight: "400px",
              width: "auto",
            }}
            src={gif1}
          ></img>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          // background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
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
          <Typography className={classes.heading}>Weather App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxHeight: "400px",
              width: "auto",
            }}
            src={gif2}
          ></img>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          // background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
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
          <Typography className={classes.heading}>Movie App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxHeight: "400px",
              width: "auto",
            }}
            src={gif1}
          ></img>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          // background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
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
          <Typography className={classes.heading}>
            Express Note Taker
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxHeight: "400px",
              width: "auto",
            }}
            src={gif1}
          ></img>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          // background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
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
          <Typography className={classes.heading}>
            Employee Directory
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxHeight: "400px",
              width: "auto",
            }}
            src={gif1}
          ></img>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          // background: "linear-gradient(180deg, #aeaeae 60%, #2a292b 90%)",
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
          <Typography className={classes.heading}>Tech Blog</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img
            style={{
              borderRadius: 16,
              border: 1,
              // works
              maxHeight: "400px",
              width: "auto",
            }}
            src={gif1}
          ></img>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default PreviousWorks;
