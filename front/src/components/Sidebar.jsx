import React from "react";
import { Link } from "react-router-dom";
const styles = {
  navbar: {
    height: "6vh"
  },
  sidebar: {
    width: "230px",
    position: " fixed",
    // top: "0",
    // left: "0",
    height: "100vh",
    zIndex: "999",
    // background: "#90CAF9",
    //color: "#fff",
    transition: "all 0.3s"
  },
  register: {
    display: "flex",
    justifyContent: "center"
  }
};
export default ({ handleChange, onSearch }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav className="sidebar bg-dark" style={styles.sidebar}>
            <div className="sidebar-sticky">
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <br />
                  <br />
                  <br />
                  <br />

                  <form onSubmit={onSearch}>
                    <input
                      className="form-control ds-input"
                      onChange={handleChange}
                      name='clearInput'
                      type="text"
                      placeholder="Filtra tu busqueda"
                    />
                 

                  
                      <input
                      className="form-control ds-input"
                      onChange={handleChange}
                      type="text"
                      placeholder="Menor precio"
                      name="menor"
                    />
                 
                    <br />

               
                    <input
                      className="form-control ds-input"
                      onChange={handleChange}
                      type="text"
                      placeholder="Mayor precio"
                      name="mayor"
                    />
                    <button type='submit'>Buscar propiedad</button>
                   
                  </form>
                </li>
                <br />
                <br />
                <br />
                <br />
                <li className="nav-item">
                  <span data-feather="file-text"></span>
                  <h6 className="nav-item">Buscar por precio:</h6>
                  {/* <form onSubmit={filterByPrice}>
                  <input
                      className="form-control ds-input"
                      onChange={handleChange}
                      type="text"
                      placeholder="Menor precio"
                      name="menor"
                    />
                    <br />
                    <input
                      className="form-control ds-input"
                      onChange={handleChange}
                      type="text"
                      placeholder="Mayor precio"
                      name="mayor"
                    />
                    <button type='submit'>Buscar</button>
                  </form>
                 */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
