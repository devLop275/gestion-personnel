import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  // Check if a valid JWT token exists in localStorage
  const isLoggedIn = localStorage.getItem('token') !== null;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Gestion Personnel
          </Link>
          {isLoggedIn ? (
            <>
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
                <li className="nav-item">
                  <Link className="nav-link" to="/logout" >
                    Log Out
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}

        </div>
      </nav>
    </div>
  );
}
