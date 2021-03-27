import React, { useState } from "react";
import { Container, Box, Input, Button, Avatar } from "./style";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const validatorEmail = () => login.email !== "" && /\S+@\S+\.\S+/.test(login.email);
  const validatorPassword = () => login.password !== "";

  const [validator, setValidator] = useState({
    emailActive: false,
    emailMessage: "E-mail inválido",

    passwordActive: false,
    passwordMessage: "Preencha a senha",
  });

  return (
    <Container>
      <Box>
        <Typography component="h1" variant="h5">
          ChurrasCool
        </Typography>

        <Avatar>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Input
          onChange={({ target: { value: email } }) => {
            setLogin({
              ...login,
              email,
            });
          }}
          margin="normal"
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          error={!validatorEmail() && validator.emailActive}
          helperText={
            !validatorEmail() && validator.emailActive
              ? validator.emailMessage
              : ""
          }
          onBlur={() => {
            setValidator({
              ...validator,
              emailActive: true,
            });
          }}
        />

        <Input
          onChange={({ target: { value: password } }) => {
            setLogin({
              ...login,
              password,
            });
          }}
          margin="normal"
          id="outlined-basic"
          label="Senha"
          type="password"
          variant="outlined"
          error={!validatorPassword() && validator.passwordActive}
          helperText={
            !validatorPassword() && validator.passwordActive
              ? validator.passwordMessage
              : ""
          }
          onBlur={() => {
            setValidator({
              ...validator,
              passwordActive: true,
            });
          }}
        />

        <Button
          onClick={() => {
            if(login.password === 'picanha') {
              history.push("/churras");
            } else {
              setOpen(true);
            }
          }}
          disabled={!validatorEmail() || !validatorPassword()}
          margin="normal"
          variant="contained"
          color="primary"
        >
          Entrar
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Senha incorreta! Tente 'picanha' :)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
