import React from "react";

import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
          LIT
        </a>
        <input
          class="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
        />
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar" style={{marginTop:"5%"}}>
            <div class="sidebar-sticky">
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <Link to="/propiedades">
                    <span data-feather="file-text"></span>
                    Propiedades
                  </Link>
                </li>
                <li class="nav-item">
                  <span data-feather="file-text"></span>
                  Mas filtros
                </li>
                
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"></div>

            <canvas
              class="my-4 w-100"
              id="myChart"
              width="900"
              height="380"
            ></canvas>
          </main>
        </div>
      </div>
    </div>
  );
};
