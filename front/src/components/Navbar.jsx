// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Typography from "@material-ui/core/Typography";

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: "flex"
//     },
//     toolbar: {
//       paddingRight: 24 // keep right padding when drawer closed
//     },
//     toolbarIcon: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       padding: "0 8px",
//       ...theme.mixins.toolbar
//     },
//     appBar: {
//       zIndex: theme.zIndex.drawer + 1,
//       transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen
//       })
//     },
//     appBarShift: {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen
//       })
//     },
//     menuButton: {
//       marginRight: 36
//     },
//     menuButtonHidden: {
//       display: "none"
//     },
//     title: {
//       flexGrow: 1
//     },
//     drawerPaper: {
//       position: "relative",
//       whiteSpace: "nowrap",
//       width: drawerWidth,
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen
//       })
//     },
//     drawerPaperClose: {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9)
//       }
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//       flexGrow: 1,
//       height: "100vh",
//       overflow: "auto"
//     },
//     container: {
//       paddingTop: theme.spacing(4),
//       paddingBottom: theme.spacing(4)
//     },
//     paper: {
//       padding: theme.spacing(2),
//       display: "flex",
//       overflow: "auto",
//       flexDirection: "column"
//     },
//     fixedHeight: {
//       height: 240
//     }
//   }));
// export default ({ user, onLogout }) => {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);
//     const handleClose = event => {
//         if (anchorRef.current && anchorRef.current.contains(event.target)) {
//           return;
//         }
    
//         setOpen(false);
//       };
    
//       const handleDrawerClose = () => {
//         setOpen(true);
//       };
//   return (
//     <AppBar
//     position="absolute"
//     className={clsx(classes.appBar, open && classes.appBarShift)}
//   >
//     <Toolbar className={classes.toolbar}>
//       <IconButton
//         edge="start"
//         color="inherit"
//         aria-label="open drawer"
//         onClick={handleDrawerClose}
//         className={clsx(
//           classes.menuButton,
//           open && classes.menuButtonHidden
//         )}
//       >
//         <MenuIcon />
//       </IconButton>
//       <Link href="/"className="navbar-brand">
//         <Typography
//           component="h1"
//           variant="h6"
//           color="inherit"
//           noWrap
//           className={classes.title}
//         >
//           L I T
//         </Typography>
//       </Link>
//       <IconButton color="inherit">
//         {/* <Badge badgeContent={4} color="secondary"> */}
//           <Link href="/login">
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.link}
              
//               // color="primary"
//               // variant="outlined"
//               // className={classes.link}
//             >
//               Login
//             </Button>
//           </Link>
//         {/* </Badge> */}
//       </IconButton>
//       <IconButton color="inherit">
//         {/* <Badge badgeContent={4} color="secondary"> */}
//           <Link href="/register">
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.link}
              
//               // color="primary"
//               // variant="outlined"
//               // className={classes.link}
//             >
//               Registrate
//             </Button>
//           </Link>
//         {/* </Badge> */}
//       </IconButton>
//     </Toolbar>
//   </AppBar>
//   );
// };
