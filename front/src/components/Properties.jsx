import React, {Fragment} from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';


export default ({propiedades}) => {
    return (
        <>
        {propiedades.map(propiedad =>
        <div>
          <Card>
            <CardImg top width="50%" src={propiedad.imagen} alt="Card image cap" />
            <CardBody>
              <CardTitle><h1>{propiedad.nombre}</h1></CardTitle>
              <CardText>{propiedad.descripcion}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        )}
        </>
    )
    }