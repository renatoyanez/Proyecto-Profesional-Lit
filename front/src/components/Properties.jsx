
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: "18rem",
    margin: "2%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[800],
  },
  container: {
    marginTop: "-45%",
    marginLeft: "20%"
  }
}));

export default ({ propiedades, handleAddFavorite, user }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridList cellHeight={400} >
        {propiedades != null ? (propiedades.length >= 1 ? (
          propiedades.map(propiedad => (
            <Card className={classes.root} key={propiedad.id}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    L
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={propiedad.nombre}
                subheader={propiedad.ubicacion}
              />
              <Link to={`/propiedad/${propiedad.id}`}>
                <CardMedia
                  className={classes.media}
                  image={propiedad.imagen[0]}
                  title="Imagen principal"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {propiedad.truncarDescripcion}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button onClick={() => handleAddFavorite(propiedad.id)}>
                  <IconButton aria-label="add to favorites" title="Agregar a favoritos">
                    <FavoriteBorderIcon />
                  </IconButton>
                </Button>
                <Link to={`/propiedad/${propiedad.id}`}>
                  <Button title={propiedad.descripcion} size="small" color="primary">
                    Ver detalle
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))
        ) : (
            <div></div>
          )) : (null)}
      </GridList>
    </div>
  );
}