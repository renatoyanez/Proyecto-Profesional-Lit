import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Ir al Home
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    height: "600px",
    marginTop: "-47%",
    marginLeft: "18%"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  input: {
    padding: "10%"
  }
}));

export default props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDropDownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crea una propiedad
          </Typography>
          <form
            onSubmit={props.handleSubmit}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField

                  onChange={props.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="Nombre"
                  label="Nombre"
                  name="nombre"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={props.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="Descripcion"
                  label="Descripcion"
                  name="descripcion"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={props.handleChange}
                  variant="outlined"
                  required
                  type="number"
                  id="Precio"
                  label="Precio"
                  name="precio"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={props.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="Ubicacion"
                  label="Ubicacion"
                  name="ubicacion"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={props.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="Imagen"
                  label="URLs (separadas por comas)"
                  name="imagen"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <>
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleDropDownClick}>
                    Categorias
                  </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      >
                      {props.categories ? (props.categories.map(category =>
                      <MenuItem id={category.name} onClick={props.handleClick}>{category.name}</MenuItem>
                   )) : (null)}
                   </Menu>
                </>
              </Grid>
              <Grid item xs={12}>
                <RadioGroup onChange={props.handleChange} aria-label="quiz" name="quiz">
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Disponible"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No Disponible"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Aceptar
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};
