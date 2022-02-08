import React from "react";
import { Link } from "react-router-dom";
import Imgg from "../layout/img/36593953.jpg";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbara-brand text-light" exact to="ak">
          <img src={Imgg} alt="Logo" srcset="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link  text-light"
                aria-current="page"
                exact
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" exact to="/userslist">
                Users List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" exact to="/aboud">
                Aboud
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" exact to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="btn btn-outline-secondary" to="/users/add">
                Add Your Name
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
