import React from "react";

export default props => (

  <div>
    <div
      style={{ marginTop: "10%" }}
      className="modal fade"
      id={`editionFormId${props.propiedad.id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">
              Editar esta propiedad ({props.propiedad.nombre})
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-3">
            <div className="md-form mb-3">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="nombre"
                id="form3"
                placeholder="Nombre de la propiedad"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>
            <div className="md-form mb-3">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="descripcion"
                id="form3"
                placeholder="Descripcion"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>

            <div className="md-form mb-3">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="precio"
                id="form3"
                placeholder="Precio"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>

            <div className="md-form mb-3">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="ubicacion"
                id="form3"
                placeholder="Ubicacion"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>

            <div className="md-form mb-3">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="imagen"
                id="form3"
                placeholder="Imagenes"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>


            {/*  aca lo de cataegorias que guardaste borrador  */}

            {/*  aca lo de disponible que guardaste borrador  */}


          </div>
          <div
            className="modal-footer d-flex justify-content-center"
          >
            {/* <Link to={`/propiedad/${props.propiedad.id}`} > */}
            <button className="btn btn-indigo" onClick={props.handleSubmit}>
              Send <i className="fas fa-paper-plane-o ml-1"></i>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);
