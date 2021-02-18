import React from "react";
import { makeStyles, Grid, Paper, Box } from "@material-ui/core";
import logo from "../../assets/images/home-background-original.jpg";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: "90vw",
    minHeight: "75vh",
    display: "flex",
    backgroundImage: "url(" + logo + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "320px 320px",
  },
}));

function Home() {
  const classes = useStyles();
  return <div className={classes.root} />;
}

export default Home;
