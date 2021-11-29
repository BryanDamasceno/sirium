/* eslint-disable react/prop-types */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

export default function CardReserva(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Quarto reservado"
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: "rgba(0, 0, 0, 0.234) 3px 3px 3px 3px",
    color: "white",
    textAlign: "initial",
    backgroundColor: "#2c2c2c",
    fontFamily: "Roboto",
    borderRadius: 4,
    transition: "0.2s",

    "&:hover": {
      transform: "scale(1.01)",
    },
  },
});
