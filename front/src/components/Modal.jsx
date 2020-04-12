import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default (
  props /*** handleChange, handleSubmit... Tal vez debas traer estas como props y luego llamarlas abajo como props.handler...*/
) => (
  <div>
    <div
      className="modal fade"
      id={"editionFormId"}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">
              Editar esta propiedad {/*({props.id})*/}
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
            <div className="md-form mb-5">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="nombre"
                id="form3"
                placeholder="Nombre de la propiedad"
                className="form-control validate" /*onChange={props.handleChange} */
              />
            </div>
            <div className="md-form mb-5">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="descripcion"
                id="form3"
                placeholder="Descripcion"
                className="form-control validate" /*onChange={props.handleChange}*/
              />
            </div>

            <div name="precio" className="md-form mb-5">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Precio"
                  aria-label="Amount (to the nearest dollar)"
                />
                <InputGroup.Append>
                  <InputGroup.Text>$</InputGroup.Text>
                  <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>

            <div className="md-form mb-5">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="ubicacion"
                id="form3"
                placeholder="Ubicacion"
                className="form-control validate" /*onChange={props.handleChange}*/
              />
            </div>

            <div className="md-form mb-5">
              <i className="fa fa-gear mr-5"></i>
              <input
                type="text"
                name="imagen"
                id="form3"
                placeholder="Imagenes" /**AQUI DEBE HABER UN POPUP CON INPUTS PARA INSERTAR DISTINTAS IMAGENES**/
                className="form-control validate" /*onChange={props.handleChange}*/
              />
            </div>

            <div className="md-form mb-5">
              Categorias:
              <select
                className="selectpicker"
                multiple /*onChange={props.handleCatChange}*/
              >
                <option value="Categoria 1">Categoria 1</option>
                <option value="Categoria 1">Categoria 1</option>
                <option value="Categoria 1">Categoria 1</option>
                <option value="Categoria 1">Categoria 1</option>
                {/* {props.cat.length && props.cat.map(cati =>
                                <option key={cati.id} value={cati.name}>{cati.name}</option>
                           )}*/}
              </select>
            </div>
          </div>

          <div
            className="modal-footer d-flex justify-content-center"
            data-toggle="modal"
            data-target="#modalSubscriptionForm"
          >
            <button className="btn btn-indigo" onClick={props.handleSubmit}>
              Send <i className="fas fa-paper-plane-o ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
