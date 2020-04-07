import React from "react";
import { Link } from "react-router-dom";
const styles = {
  navbar:{
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
    justifyContent: "center",
    backgroundColor: "red"
  }
};
export default ({
  /*propiedadFiltrada*/ updateSearch,
  clearInput,
  onSearch
}) => {
  return (
    <div>
      <nav style={styles.navbar} className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          LIT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Log-In <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign-Up
              </a>
            </li>
          </ul>
        </div>
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
