import React from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@material-ui/core";

function DonorsCreateEdit({ edit }) {
  const titulo = edit ? "EDIÇÃO" : "CRIAÇÃO";
  return (
    <form>
      <Grid container justify="center" spacing={4}>
        <Grid item>
          <h1> {titulo} DE CONTRIBUINTES</h1>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={4}>
        <Grid item>
          <TextField label="Nome" variant="filled" />
        </Grid>
        <Grid item>
          <TextField label="Sobrenome" variant="filled" />
        </Grid>
        <Grid item>
          <TextField label="Apelido" variant="filled" />
        </Grid>
        <Grid item>
          <TextField label="Idade" variant="filled" />
        </Grid>
        <Grid item>
          <TextField label="CPF" variant="filled" />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item>
          <TextField label="Endereço" variant="filled" />
        </Grid>
        <Grid item>
          <TextField label="Bairro" variant="filled" />
        </Grid>
        <Grid item>
          <TextField label="Cidade" variant="filled" />
        </Grid>
        <Grid item>
          <TextField label="Telefone" variant="filled" />
        </Grid>
        <Grid item>
          <TextField label="Email" variant="filled" />
        </Grid>
      </Grid>
      <Grid container spacing={1} direction="row-reverse" alignItems="flex-end" style={{ paddingTop: '30px' }}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/donors"
            onClick={() => {
              alert("Contribuinte salvo com sucesso!");
            }}
          >
            Salvar
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="/donors">
            Voltar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default DonorsCreateEdit;
