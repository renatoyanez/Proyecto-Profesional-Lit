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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Checkbox from '@material-ui/core/Checkbox';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 
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
    flexGrow: 1,
    textAlign:"center"
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
    margin: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0)
  }
}));

export default ({ handleChange, handleCatChange, onSearch, onCatSearch, user, onLogout, categories }) => {
  const classes = useStyles();
  // const handleRadioChange = event => {
  //   setHelperText(" ");
  //   setError(false);
  // };

  return (
    <div className={classes.root}>
      <AppBar
        style={{ background: "#37474f" }}
        position="absolute"
        className={clsx(classes.appBar && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          {user.username ? (
            <IconButton color="inherit">
              <Link to="/login">
                <Button
                  variant="contained"
                  onClick={onLogout}
                  style={{ backgroundColor: "#bdbdbd" }}
                >
                  Logout
                </Button>
              </Link>
            </IconButton>
          ) : (
            <div>
              <IconButton color="inherit">
                <Link to="/login">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{ backgroundColor: "#bdbdbd" }}
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
                    style={{ backgroundColor: "#bdbdbd" }}
                  >
                    Registrate
                  </Button>
                </Link>
              </IconButton>
            </div>
          )}

          {user.username ? (
            <IconButton color="inherit">
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                {`Bienvenido ${user.username}!`}
              </Typography>
            </IconButton>
          ) : null}
          {user.admin ? (
            <IconButton color="inherit">
              <Link to="/create">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#bdbdbd" }}
                  className={classes.button}
                  startIcon={<AddIcon />}
                  style={{ marginLeft: "4%" }}
                >
                  Crear
                </Button>
             
              </Link>
            </IconButton>
          ) : null}
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
          <HomeWorkIcon  style={{marginLeft:"3%"}}/>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            
            className={classes.title}
          >
            <Link to="/">L     I      T</Link>
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
                      variant="contained"
                      style={{ backgroundColor: "#bdbdbd" }}
                      className={classes.button}
                    >
                      Busca tu Propiedad
                    </Button>
                  </ListItem>
              {/* </form>
              <form onSubmit={onCatSearch}> */}
          <ListItem button>
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Categorias" />
          </ListItem>
          <ListItem button>
            <FormControl component="fieldset" className={classes.formControl}>
               {categories != null ? (categories.length ? ( 
                 categories.map(category => 
                  <FormControlLabel
                  control={<Checkbox onChange={handleCatChange} name={category.name} color="default" />}
                  label={category.name}
                  />)) : (<div><p>No hay categorias existentes</p></div>)) : null}
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#bdbdbd" }}
                className={classes.button}
                >
                Filtra
              </Button>
            </FormControl>
          </ListItem>
          </form>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box pt={4}>{/* <Copyright /> */}</Box>
        </Container>
      </main>
    </div>
  );
};
