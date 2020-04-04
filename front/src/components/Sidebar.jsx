import React from "react";

import { Link } from "react-router-dom";
const styles = {
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
  }
};
export default ({ /*propiedadFiltrada*/updateSearch, clearInput, onSearch }) => {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
          LIT
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </nav>

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
                    onChange={updateSearch}
                    value={clearInput}
                    type="text"
                    placeholder="Filtra tu busqueda"
                  />
                  </form>
                </li>
                <li className="nav-item">
                  <Link to="/propiedades">
                    <span data-feather="file-text"></span>
                    Propiedades
                  </Link>
                </li>
                <li className="nav-item">
                  <span data-feather="file-text"></span>
                  Mas filtros
                </li>
              </ul>
            </div>
          </nav>

          {/* <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"></div>

            <canvas
              className="my-4 w-100"
              id="myChart"
              width="900"
              height="380"
            ></canvas>
          </main> */}
        </div>
      </div>
    </div>
  );
};
