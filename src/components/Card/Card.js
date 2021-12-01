/* eslint-disable react/prop-types */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: "rgba(0, 0, 0, 0.234) 3px 3px 3px 3px",
    color: "white",
    textAlign: "center",
    backgroundColor: "#51649d",
    fontFamily: "Roboto",
    borderRadius: 25,
    fontWeight: 600,
    transition: "0.2s",
    opacity: "97%",
    textDecoration: "none",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

export default function CardInternet(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Faça seu site"
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography>{props.titulo}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
