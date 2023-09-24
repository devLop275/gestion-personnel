import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Gestion Personnel
          </Link>
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/">
                Personnel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ListerConge">
                Congé
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listerAbsence" >
                Absence
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
