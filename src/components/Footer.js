import React from "react";

import { Typography, makeStyles, Box, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
import githubLogo from "../assets/github.png";
import igLogo from "../assets/iglogo.png";
import linkedInLogo from "../assets/linkedInLogo.png";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import Paper from "@material-ui/core/Paper";
// import Draggable from "react-draggable";

const useStyles = makeStyles((theme) => ({
  details: {
    //this is to make the welcome components a full screen component
    // width: "100vw",
    // height: "100vh",
    // spacing: 0,
    // justify: "space-around",
    background: "#aeaeae",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
}));

function Footer() {
  const redirectGithub = () => {
    // console.log("hittin");
    window.open("https://github.com/SANELulu", "_blank");
    // window.location.href = "https://github.com/SANELulu";
  };
  const redirectIG = () => {
    // console.log("hittin");
    window.open("https://www.instagram.com/sane_lucas/?hl=en", "_blank");
    // window.location.href = "https://github.com/SANELulu";
  };
  const redirectLinkedIn = () => {
    // console.log("hittin");
    window.open("https://www.linkedin.com/in/lucas-diaz-2716631bb/", "_blank");
    // window.location.href = "https://github.com/SANELulu";
  };
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fade bottom delay={900}>
      <Box
        id="footer"
        className={classes.details}
        ////////////
        boxShadow={3}
        m={1}
        p={1}
        style={{
          borderRadius: 16,
          border: 1,
          background: "linear-gradient(-35deg, #6b65bd 10%, #3f3c68 60%)",
          // background: "#aeaeae",
        }}
      >
        {/* ////// */}
        <div>
          <Grid container justify="flex-end">
            <Button disableElevation onClick={handleClickOpen}>
              Contact Me
            </Button>
          </Grid>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
              Contact Me:
            </DialogTitle>

            <Box p={3}>
              <DialogContentText>
                <li>email: lucasdiaz22b@gmail.com</li>
              </DialogContentText>
              <DialogContent>
                <img
                  style={{
                    maxWidth: "30px",
                    padding: "10px",
                  }}
                  src={igLogo}
                  onClick={redirectIG}
                ></img>
                <img
                  style={{
                    maxWidth: "30px",
                    padding: "10px",
                  }}
                  src={githubLogo}
                  onClick={redirectGithub}
                ></img>
                <img
                  style={{
                    maxWidth: "30px",
                    padding: "10px",
                  }}
                  src={linkedInLogo}
                  onClick={redirectLinkedIn}
                ></img>
              </DialogContent>
            </Box>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
    </Fade>
  );
}

export default Footer;
