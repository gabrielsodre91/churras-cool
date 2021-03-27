import React, { useState } from "react";
import { Input, Button } from "../../screens/login/style";
import { FormContainer } from "./style";
import IconButton from "@material-ui/core/IconButton";
import { Done, Add, Cancel } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CurrencyMask } from "../../screens/churras-form/style";
import { v4 as uuidv4 } from "uuid";

export const AddParticipant = ({ onAdd }) => {
  const [actionState, setActionState] = useState("idle");

  const initialStateParticipant = {
    name: "",
    value: 0,
    drinkIncluded: false,
    paid: false,
  }

  const [participant, setParticipant] = useState(initialStateParticipant);

  return (
    <>
      {actionState === "idle" && (
        <IconButton
          onClick={() => setActionState("adding")}
          edge="end"
          aria-label="delete"
        >
          <Add />
        </IconButton>
      )}
      {["adding", "editing"].includes(actionState) && (
        <FormContainer>
          Adicionando
          <IconButton
            onClick={() => {
              onAdd({
                ...participant,
                id: uuidv4()
              });
              setActionState("idle");
              setParticipant(initialStateParticipant);
            }}
            edge="end"
            aria-label="delete"
          >
            <Done />
          </IconButton>
          <IconButton
            onClick={() => setActionState("idle")}
            edge="end"
            aria-label="delete"
          >
            <Cancel />
          </IconButton>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Input
              style={{ flexDirection: "column", width: "50%" }}
              value={participant.name}
              margin="normal"
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              onChange={({ target: { value: name } }) => {
                setParticipant({
                  ...participant,
                  name,
                });
              }}
            />

            <CurrencyMask
              style={{ 
                flexDirection: "column", 
                width: "45%",
                background: 'none',
                height: '1.1876em',
                padding: '20px 14px',
                margin: '15px 4px'
              }}
              max={100000}
              onValueChange={(value) =>
                setParticipant({
                  ...participant,
                  value,
                })
              }
              value={participant.value}
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                checked={participant.drinkIncluded}
                onChange={() => {
                  setParticipant({
                    ...participant,
                    drinkIncluded: !participant.drinkIncluded,
                  });
                }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Bebida inclusa"
          />
        </FormContainer>
      )}
    </>
  );
};
