import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Button from "../../components/Button";
import ModalError from "../../components/ModalError";
import logo from "../../assets/images/logo-login.jpg";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Background from '../../assets/images/grey-background.jpg';

const axios = require("axios");

function LoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: { valid: true, message: "" },
    password: { valid: true, message: "" },
  });
  const [showModalError, setShowModalError] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    if (!username) {
      setErrors({
        username: { valid: false, message: "Campo Obrigatório" },
        password: {
          valid: password,
          message: password ? "" : "Campo Obrigatório!",
        },
      });
    } else if (!password) {
      setErrors({
        username: {
          valid: username,
          message: username ? "" : "Campo Obrigatório!",
        },
        password: { valid: false, message: "Campo Obrigatório!" },
      });
    } else {
      setErrors({
        username: { valid: true, message: "" },
        password: { valid: true, message: "" },
      });
      authenticate();
    }
  }

  function authenticate() {
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        if (response.status === 200) {
          history.push("/home");
        }
      })
      .catch(function (error) {
        setShowModalError(true);
        console.log(error);
      });
  }

  return (
    <div
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: "round",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid>
          <Card variant="outlined">
            <CardContent
              style={{
                height: "40px",
                backgroundImage: "url(" + logo + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Card>
          <form
            onSubmit={(event) => {
              onSubmit(event);
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <TextField
                  id="username"
                  label="Usuário"
                  value={username}
                  error={!errors.username.valid}
                  helperText={errors.username.message}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  onBlur={(event) => {
                    if (!event.target.value) {
                      setErrors({
                        username: {
                          valid: false,
                          message: "Campo Obrigatório",
                        },
                        password: { valid: password, message: "" },
                      });
                      // erros.username.valid = false;
                      // erros.username.message = 'Campo obrigatório!';
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="password"
                  label="Senha"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  error={!errors.password.valid}
                  helperText={errors.password.message}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  onBlur={(event) => {
                    if (!event.target.value) {
                      setErrors({
                        username: { valid: username, message: "" },
                        password: {
                          valid: false,
                          message: "Campo Obrigatório!",
                        },
                      });
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  fullWidth
                />
                <Button name="Login" />
              </CardContent>
            </Card>
          </form>
          {/* <Footer/> */}
        </Grid>
        <ModalError
          show={showModalError}
          close={() => {
            setShowModalError(false);
          }}
        />
      </Grid>
    </div>
  );
}

export default LoginForm;
