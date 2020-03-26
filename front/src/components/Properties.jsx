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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    overflow: "hidden",
    justifyContent: "space-around",
    marginLeft:"17%",
    // marginTop:""
  },
  // gridList: {
  //   width: "100vw",
  //   height: "100vh"
  // },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default ({ propiedades }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        {propiedades.map(propiedad => (
          <Card className={classes.gridList} key={propiedad.id}>
            <CardActionArea>
              <CardMedia className={classes.media} image={propiedad.imagen} />
              <CardContent>
                <Typography>{propiedad.nombre}</Typography>
                <Typography>{propiedad.ubicacion}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/propiedades/${propiedad.id}`}>
                <Button size="small" color="primary">
                  Ver detalle
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
