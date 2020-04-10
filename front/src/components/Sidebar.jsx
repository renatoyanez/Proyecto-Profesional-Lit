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
export default ({ updateSearch,
  clearInput,
  onSearch
}) => {
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
        </div>
      </div>
    </div>
  );
};
