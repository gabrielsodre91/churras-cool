import React, { useEffect, useState, useRef } from "react";
import { Container, Box } from "../login/style";
import { DatePickerInput, AddButton, BackButton, CurrencyMask } from "./style";
import Typography from "@material-ui/core/Typography";
import { ArrowBack, Save, Person, LocalBar } from "@material-ui/icons";
import { Alert, AlertTitle } from "@material-ui/lab";

import { makeStyles } from "@material-ui/core/styles";

import { AddParticipant } from "../../components/add-participant";

import { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";

import { Input } from "../login/style";

import { useHistory } from "react-router-dom";

registerLocale("pt-BR", ptBR);

const useStyles = makeStyles({
  formContainer: {
    position: "relative",
    overflow: "hidden scroll",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  alertParticipants: {
    width: "75%",
  },
  listContainer: {
    width: 300,
  },
  backButton: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
  },
  addButton: {
    position: "absolute",
    bottom: "10px",
    right: "20px",
  },
});

export const ChurrasForm = ({ location }) => {
  const classes = useStyles();
  const history = useHistory();

  const descriptionRef = useRef(null);

  const [churras, setChurras] = useState({
    date: new Date(),
    description: "",
    value: 0,
    observations: "",
    participants: [],
  });

  useEffect(() => {
    if (location.state) {
      setChurras({
        ...location.state,
        date: new Date(location.state.date)
      });

      //descriptionRef.current.blur();
    }
  }, []);

  const save = () => {
    churras.value /= 100;

    console.log(churras);

    history.push("/churras");
  };

  const deleteParticipant = (participant) => {
    setChurras({
      ...churras,
      participants: churras.participants.filter(
        (item) => item.id !== participant.id
      ),
    });
  };

  const checkParticipant = (participant, checked) => {
    setChurras({
      ...churras,
      participants: churras.participants.map((item) => {
        if (item.id === participant.id) {
          item.paid = checked;
        }

        return item;
      }),
    });
  };

  return (
    <Container style={{ flexDirection: "column" }}>
      <Typography style={{ flexDirection: "row" }} component="h1" variant="h5">
        ChurrasCool
      </Typography>

      <Box style={{ position: "relative", margin: 10 }}>
        <div className={classes.formContainer}>
          <DatePickerInput
            selected={churras.date}
            locale="pt-BR"
            onChange={(date) =>
              setChurras({
                ...churras,
                date,
              })
            }
            dateFormat="dd/MM/yyyy"
          />

          <Input
            margin="normal"
            value={churras.description}
            ref={descriptionRef}
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
            onChange={({ target: { value: description } }) => {
              setChurras({
                ...churras,
                description,
              });
            }}
          />

          {/* <CurrencyMask
            max={100000}
            onValueChange={(value) =>
              setChurras({
                ...churras,
                value,
              })
            }
            value={churras.value}
          /> */}

          <Input
            margin="normal"
            id="outlined-basic"
            label="Observações"
            variant="outlined"
            multiline
            value={churras.observations}
            rows={4}
            onChange={({ target: { value: observations } }) => {
              setChurras({
                ...churras,
                observations,
              });
            }}
          />

          <Alert
            className={classes.alertParticipants}
            icon={<Person fontSize="inherit" />}
            severity="info"
          >
            <AlertTitle>Participantes</AlertTitle>

            <AddParticipant
              onAdd={(newParticipant) => {
                newParticipant.value /= 100;

                setChurras({
                  ...churras,
                  participants: [...churras.participants, newParticipant],
                });
              }}
            />

            <div className={classes.listContainer}>
              <List component="nav" aria-label="main mailbox folders">
                {churras.participants.map((participant) => (
                  <>
                    <ListItem>
                      <ListItemIcon>
                        <Avatar>
                          <Checkbox
                            checked={!!participant.paid}
                            onChange={({ target: { checked } }) => {
                              checkParticipant(participant, checked);
                            }}
                            inputProps={{ "aria-label": "primary checkbox" }}
                          />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText primary={participant.name} />
                      <ListItemSecondaryAction>
                        <LocalBar />
                        <span
                          style={{
                            textDecoration: participant.paid
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(participant.value)}
                        </span>

                        <IconButton
                          onClick={() => {
                            deleteParticipant(participant);
                          }}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
            </div>
          </Alert>
        </div>

        <BackButton
          className={classes.backButton}
          color="secondary"
          aria-label="back"
          onClick={() => history.push("/churras")}
        >
          <ArrowBack />
        </BackButton>

        <AddButton
          className={classes.addButton}
          color="primary"
          aria-label="back"
          onClick={() => save()}
        >
          <Save />
        </AddButton>
      </Box>
    </Container>
  );
};
