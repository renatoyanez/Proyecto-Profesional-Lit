import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    overflow: "hidden",
    justifyContent: "space-around",
    marginLeft: "17%",
    marginTop: "4%"
  },
  gridList: {
    width: "100vw",
    height: "55vh"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
}));

export default ({ propiedades }) => {
  const classes = useStyles();

  return (
    // <div>
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList}>
        {propiedades.length >= 1 ? (
          propiedades.map(propiedad => (
            <Card
              style={{
                width: "18rem",
                margin: "2%"
              }}
              className={classes.gridList}
              key={propiedad.id}
            >
              <Link to={`/propiedades/${propiedad.id}`}>
                <CardActionArea>
                  <CardMedia
                  className={classes.media}
                    // style={{
                    //   height: "60%",
                    //   objectFit: "contain"
                    // }}
                    image={propiedad.imagen[0]}
                  />
                  <CardContent>
                    <Typography>{propiedad.nombre}</Typography>
                    <Typography>{propiedad.ubicacion}</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Link to={`/propiedades/${propiedad.id}`}>
                  <Button size="small" color="primary">
                    Ver detalle
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))
        ) : (
          <div>
            <h1>no hay nada</h1>
          </div>
        )}
      </GridList>
    </div>
    // </div>
  );
};

// import React from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import GridList from "@material-ui/core/GridList";

// const useStyles = makeStyles(theme => ({
// root: {
//   display: "flex",
//   flexWrap: "wrap",
//   overflow: "hidden",
//   backgroundColor: theme.palette.background.paper,
//   justifyContent: "space-around",
//   paddingLeft: "7%"
// },
// gridList: {
//   width: "100vw",
//   height: "100vh"
// }
// }));

// const style = {
//   products: {
//     display: "block",
//     margin: "auto"
//   }
// };

// export default ({ propiedades }) => {
//   const classes = useStyles();
//   console.log(propiedades, "propiedadesdd");

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={400} className={classes.gridList}>
//         {propiedades.length >= 1 ? (
//           propiedades.map(prod => (
//             <div
//               className="card"
//               style={{
//                 width: "18rem",
//                 margin: "2% 2% 2% 2%"
//               }}
//               key={prod.id}
//             >
//               <img
//                 src={prod.imagenes}
//                 className="card-img-top"
//                 style={{
//                   height: "60%",
//                   objectFit: "contain"
//                 }}
//                 alt="no images"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{prod.nombre}</h5>
//                 <p className="card-text">{prod.precio}</p>
//                 <Link
//                   to={`/propiedad/${prod.id}`}
//                   className="btn btn-primary"
//                   // onClick={() => {
//                   //   handleClick(prod);
//                   // }}
//                 >
//                   Mas detalle
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div style={style.products}>
//             <div className="alert alert-secondary" role="alert">
//               <h2 className="alert-heading">
//                 Oops! No han habido coincidencias con tu búsqueda...{" "}
//               </h2>
//               <h3>
//                 <Link to="/">Inténtalo de nuevo!</Link>
//               </h3>
//             </div>
//           </div>
//         )}
//       </GridList>
//     </div>
//   );
// };
