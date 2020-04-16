import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ApartmentIcon from "@material-ui/icons/Apartment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default ({ handleChange, onSearch, user, onLogout }) => {

  const classes = useStyles();
  const handleRadioChange = event => {
    setHelperText(" ");
    setError(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          {user ?  
          <IconButton color="inherit">
          <Link to="/login">
              <Button
                variant="contained"
                className={classes.link}
                onClick={onLogout}
              >
              Log-out
              </Button>
            </Link> 
            </IconButton>:
          <div>

          <IconButton color="inherit">

            <Link to="/login">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.link}
              >
                Login
              </Button>
            </Link>
          </IconButton>
            <IconButton color="inherit">

            <Link to="/register">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.link}
              >
                Registrate
              </Button>
            </Link>
          </IconButton>
          </div>

        }
          {/* <IconButton color="inherit">
            <Link to="/register">
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.link}
              >
                Registrate
              </Button>
            </Link>
          </IconButton> */}
          {user ? 
           <IconButton color="inherit">
        
           <Typography
              component="h3"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {`Bienvenido ${user}!`}
            </Typography>
         
         </IconButton>
         :
         null}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
        <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              L I T
            </Typography>
        </div>
        <Divider />
        <List>
          <form onSubmit={onSearch}>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  label="Buscar"
                  name="clearInput"
                  autoComplete="lname"
                />
              </Grid>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  label="Menor"
                  name="menor"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  label="Mayor"
                  name="mayor"
                  autoComplete="lname"
                />
              </Grid>
            </ListItem>
            <ListItem button>
            <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Busca tu Propiedad
              </Button>
            </ListItem>
          </form>
          <ListItem button>
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Categorias" />
          </ListItem>
          <ListItem button>
            <FormControl
              component="fieldset"
              className={classes.formControl}
            >
              <RadioGroup
                aria-label="quiz"
                name="quiz"
                onChange={handleRadioChange}
              >
                <FormControlLabel
                value="depto"
                  control={<Radio />}
                  label="Departamento"
                />
                <FormControlLabel
                value="ph"
                  control={<Radio />}
                  label="PH"
                />
                <FormControlLabel
                value="casa"
                  control={<Radio />}
                  label="Casa"
                />
                <FormControlLabel
                value="compra"
                  control={<Radio />}
                  label="Compra"
                />
                <FormControlLabel
                value="alquilar"
                  control={<Radio />}
                  label="Alquilar"
                />
              </RadioGroup>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Filtra
              </Button>
            </FormControl>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};
