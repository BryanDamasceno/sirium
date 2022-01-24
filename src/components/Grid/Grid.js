/* eslint-disable react/prop-types */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import CardMedia from "@material-ui/core/CardMedia";

export default function CardReserva(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Faça seu site"
          height="190"
          width="190"
          image={props.image}
        />
        <CardContent className={classes.title}>{props.titulo}</CardContent>
      </CardActionArea>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
    height: 375,
    boxShadow: "rgba(0, 0, 0, 0.115) 2px 2px 2px 2px",
    color: "white",
    textAlign: "center",
    alignItems: "center",
    fontWeight: 700,
    fontSize: 500,
    marginTop: "1rem",
    backgroundColor: "#949bd1",
    fontFamily: "Roboto",
    borderRadius: 62,
    transition: "0.3s",

    "&:hover": {
      transform: "scale(1.09)",
    },
  },

  title: {
    fontSize: "1.3rem",
    fontFamily: "Roboto",
    fontWeight: 700,
    lineHeight: 1.334,
    letterSpacing: 0,
  },
});
