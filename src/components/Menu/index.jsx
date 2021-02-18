import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from "@material-ui/core";

import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import MotorcycleOutlinedIcon from "@material-ui/icons/MotorcycleOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { makeStyles } from "@material-ui/core/styles";

import Background from "../../assets/images/grey-background.jpg";

const useStyles = makeStyles((theme) => ({
  menuGroups: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(6),
  },
}));

function Menu() {
  const classes = useStyles();
  const [register, setRegister] = React.useState(-1);
  const [operation, setOperation] = React.useState(-1);
  const [reports, setReports] = React.useState(-1);

  return (
    <AppBar
      position="static"
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: "round",
      }}
    >
      <Toolbar variant="regular">
        <BottomNavigation
          value={register}
          onChange={(event, newValue) => {
            setRegister(newValue);
            setOperation(-1);
            setReports(-1);
          }}
          showLabels
          className={classes.menuGroups}
        >
          <BottomNavigationAction
            component={Link}
            to="/users"
            label="Usuários"
            icon={<PersonAddOutlinedIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/donors"
            label="Contribuintes"
            icon={<FaceOutlinedIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/messengers"
            label="Mensageiros"
            icon={<MotorcycleOutlinedIcon />}
          />
        </BottomNavigation>

        <BottomNavigation
          value={operation}
          onChange={(event, newValue) => {
            setOperation(newValue);
            setRegister(-1);
            setReports(-1);
          }}
          showLabels
          className={classes.menuGroups}
        >
          <BottomNavigationAction
            component={Link}
            to="/donation"
            label="Lançar Doação"
            icon={<MonetizationOnOutlinedIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/receipts"
            label="Lançar Recibo"
            icon={<ReceiptOutlinedIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/cashflows"
            label="Fechamento Caixa"
            icon={<CheckCircleOutlineOutlinedIcon />}
          />
        </BottomNavigation>

        <BottomNavigation
          value={reports}
          onChange={(event, newValue) => {
            setReports(newValue);
            setOperation(-1);
            setRegister(-1);
          }}
          showLabels
          className={classes.menuGroups}
        >
          <BottomNavigationAction
            component={Link}
            to="/reports"
            label="Relatório Caixa"
            icon={<AssessmentOutlinedIcon />}
          />
        </BottomNavigation>
        <Grid container direction="row-reverse">
          <Grid item>
            <IconButton style={{ color: "black" }} href="/">
              <ExitToAppIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
