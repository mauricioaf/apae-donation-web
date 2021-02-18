import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Card,
  CardContent,
  IconButton,
  Button,
} from "@material-ui/core";
import DataGridCustom from "../../../../components/Datagrid";

//Routers
import { Link } from "react-router-dom";

//Icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";

//API
import { findDonors } from "../../../../services/donors";

const columns = [
  {
    field: "",
    headerName: "Detalhes",
    width: 110,
    renderCell: () => {
      return (
        <IconButton component={Link} to="/donors/edit">
          <VisibilityIcon color="primary" />
        </IconButton>
      );
    },
  },
  { field: "firstName", headerName: "Nome", width: 130 },
  { field: "lastName", headerName: "Sobrenome", width: 130 },
  {
    field: "age",
    headerName: "Idade",
    type: "number",
    width: 90,
  },
  {
    field: "cpf",
    headerName: "CPF",
    width: 150,
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 150,
  },
];

function Donors() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (rows.length === 0) {
      findDonors((response) => {
        setRows(response.data);
        setLoading(false);
      });
    }
  });

  return (
    <form>
      <Card variant="outlined">
        <CardContent>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={6}
          >
            <Grid item>
              <TextField label="Nome" variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="Sobrenome" variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="CPF" variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="Email" variant="outlined" />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                name="search"
                color="primary"
                component={Link}
                to="/home"
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardContent>
          <Grid container justify="flex-end">
            <Grid item>
            <Button
                variant="outlined"
                name="new"
                color="primary"
                component={Link}
                to="/donors/new"
              >
                <AddCircleIcon />
              </Button>
            </Grid>
          </Grid>
          <DataGridCustom columns={columns} rows={rows} loading={loading} />
        </CardContent>
      </Card>

      {/* <Card>
        <CardContent variant="outlined">
          <TextField label="Nome" variant="filled" margin="normal"/>
          <TextField label="Sobrenome" variant="filled" margin="normal"/>
          <TextField label="CPF" variant="filled" margin="normal"/>
          <TextField label="Email" variant="filled" margin="normal"/>
        </CardContent>
      </Card> */}

      {/* <Container component="div">
        <TextField label="Nome" size="small" variant="filled" margin="normal" style={{ fontSize: 4 }}/>
        <TextField label="Sobrenome" size="small" variant="filled" margin="normal" />
        <TextField label="CPF" size="small" variant="filled" margin="normal" />
        <TextField label="Email" size="small" variant="filled" margin="normal" />
      </Container> */}
    </form>
  );
}

export default Donors;
