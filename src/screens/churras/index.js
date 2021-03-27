import React from "react";
import { Container, Box } from "../login/style";
import { Grid, ContainerGrid, AddButton } from "./style";
import Typography from "@material-ui/core/Typography";
import { ArrowBack, Add } from "@material-ui/icons";
import { CardChurras } from "../../components/churras-card";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { BackButton } from "../churras-form/style";
import mockData from "./mock-churras.json";

const useStyles = makeStyles({
  container: {
    flexDirection: "column",
  },
  typography: {
    flexDirection: "row",
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
  box: {
    position: "relative",
  },
  card: {
    "&:hover, &:focus": {
      boxShadow: "1px 3px 1px #9E9E9E",
      backgroundColo: '#000'
    },
  },
});

export const Churras = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <Typography className={classes.typography} component="h1" variant="h5">
        ChurrasCool
      </Typography>

      <Box className={classes.box}>
        <ContainerGrid>
          <Grid container spacing={3}>
            {mockData.map((churras) => (
              <Grid
                onClick={() => {
                  history.push("/churras-form", churras);
                }}
                item
                xs={6}
              >
                <CardChurras className={classes.card} churras={churras} />
              </Grid>
            ))}
          </Grid>
        </ContainerGrid>

        <BackButton
          className={classes.backButton}
          color="secondary"
          aria-label="back"
          onClick={() => history.push("/login")}
        >
          <ArrowBack />
        </BackButton>

        <AddButton
          className={classes.addButton}
          color="primary"
          aria-label="add"
          onClick={() => history.push("/churras-form")}
        >
          <Add />
        </AddButton>
      </Box>
    </Container>
  );
};
