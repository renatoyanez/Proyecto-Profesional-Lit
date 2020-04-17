import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  container: {
    marginTop: "-45%",
    marginLeft: "20%"
  }
}));

export default ({ propiedades }) => {
  const classes = useStyles();

  return (
    <div  className={classes.container}>
      <GridList cellHeight={400} >
        {propiedades.length >= 1 ? (
          propiedades.map(propiedad => (
            <Card
              style={{
                width: "18rem",
                margin: "2%"
              }}
              key={propiedad.id}
            >
              <Link to={`/propiedad/${propiedad.id}`}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={propiedad.imagen[0]}
                  />
                  <CardContent>
                    <Typography>{propiedad.nombre}</Typography>
                    <Typography>{propiedad.ubicacion}</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Link to={`/propiedad/${propiedad.id}`}>
                  <Button size="small" color="primary">
                    Ver detalle
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))
        ) : (
          <div></div>
        )}
      </GridList>
    </div>
  );
};

