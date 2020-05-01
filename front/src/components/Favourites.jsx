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
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";



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

export default ({ user, favorites, handleDelete }) => {
  const classes = useStyles();


  return (
    <div className={classes.container}>
        <Typography> Tu lista de favoritos </Typography>
      <GridList cellHeight={400} >
        {favorites != null ? (favorites.length >= 1 ? (
          favorites.map(fav => (
            <Card className={classes.root} key={fav.propiedade.id}>
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
                title={fav.propiedade.nombre}
                subheader={fav.propiedade.ubicacion}
              />
              <CardMedia
                className={classes.media}
                image={fav.propiedade.imagen[0]}
                title="Imagen principal"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {fav.propiedade.truncarDescripcion}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton onClick={() => handleDelete(user.id, fav.propiedade.id)} aria-label="remove from favorites" title="Eliminar de favoritos">
                  <FavoriteIcon />
                </IconButton>
                <Link to={`/propiedad/${fav.propiedade.id}`}>
                  <Button title={fav.propiedade.descripcion} size="small" color="primary">
                    Ver detalle
                  </Button>
                </Link>
                </CardActions>
            </Card>
          ))
        ) : (
            <> <Typography> ... Todavia no has agregado nada </Typography> </>
          )) : (null)}
      </GridList>
    </div>
  );
}
