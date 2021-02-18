import React from "react";
import { Grid, Box, Paper } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components & Images
import Menu from "../Menu";
import Footer from "../Footer";

//Pages
import Users from "../../pages/registrations/users/List";
import Donors from "../../pages/registrations/donors/List";
import DonorsCreateEdit from "../../pages/registrations/donors/CreateEdit";
import Messenger from "../../pages/registrations/messengers/List";
import Donation from "../../pages/operations/Donation";
import Receipts from "../../pages/operations/Receipts";
import Cashflows from "../../pages/operations/Cashflows";
import Report from "../../pages/reports/Cashflows";
import Home from "../../pages/Home";

const routes = [
  {
    path: "/home",
    main: () => <Home />,
  },
  {
    path: "/users",
    main: () => <Users />,
  },
  {
    exact: true,
    path: "/donors",
    main: () => <Donors />,
  },
  {
    path: "/donors/new",
    main: () => <DonorsCreateEdit />,
  },
  {
    path: "/donors/edit",
    main: () => <DonorsCreateEdit edit={{ name: 'Mauricio Afonso' }}/>,
  },
  {
    path: "/messengers",
    main: () => <Messenger />,
  },
  {
    path: "/donation",
    main: () => <Donation />,
  },
  {
    path: "/receipts",
    main: () => <Receipts />,
  },
  {
    path: "/cashflows",
    main: () => <Cashflows />,
  },
  {
    path: "/reports",
    main: () => <Report />,
  },
];

export default function Template() {
  return (
    <Router>
        <Grid>
          <Grid>
            <Menu />
            <Box display="flex" position="fixed" width="100%" height="90%">
              <Box m="auto">
                <Paper
                  elevation={3}
                  style={{
                    minWidth: "90vw",
                    minHeight: "75vh",
                    display: "flex",
                  }}
                >
                  <Switch>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={route.main}
                      />
                    ))}
                  </Switch>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Footer />
    </Router>
  );
}
