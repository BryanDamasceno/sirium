import React from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "#64E759",
      color: "white",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function FloatButton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab
        href="https://api.whatsapp.com/send/?phone=553141124080&text&app_absent=0"
        syle={{ backgroundColor: "green" }}
        aria-label="edit"
      >
        <WhatsAppIcon syle={{ color: "green" }} />
      </Fab>
    </div>
  );
}

export default FloatButton;
