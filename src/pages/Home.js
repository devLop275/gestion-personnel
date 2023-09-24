import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setPer] = useState([]);
  const [searchText, setSearchText] = useState('');

 

  useEffect(() => {
    loadPer();
  }, [searchText]); // Recharger la liste lorsque searchText change

  const loadPer = async () => {
    const result = await axios.get("http://localhost:8080/personnel");
    const filteredUsers = result.data.filter((user) =>
      user.firstName.toLowerCase().includes(searchText.toLowerCase())
    );
    setPer(filteredUsers);
  };

  const deletePer = async (id) => {
    await axios.delete(`http://localhost:8080/personnel/per/${id}`);
    loadPer();
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center m-4">List Personnel</h1>

        <form className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Recherche par nom"
            aria-label="Recherche"
            value={searchText}
            onChange={handleSearch}
          />
        </form>
        
          <div className="col text-right">
          <Link className="btn btn-primary" to="/addper">
            Ajouter Personnel
          </Link>
    </div>
        <h3>   </h3>
        <table className="table border shadow">
          <thead>
            <tr>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>CIN</th>
              <th>EMAIL</th>
              <th>GENRE</th>
              <th>TEL</th>
              <th>NAISSANCE</th>
              <th>FONCTION</th>
              <th>EMBAUCHE</th>
              <th>ECHEL</th>
              <th>SALAIRE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((personnel, index) => (
              <tr key={personnel.id}>
                <td>{personnel.firstName}</td>
                <td>{personnel.lastName}</td>
                <td>{personnel.cin}</td>
                <td>{personnel.email}</td>
                <td>{personnel.sex}</td>
                <td>{personnel.phone}</td>
                <td>{personnel.dateOfBirth}</td>
                <td>{personnel.fonction}</td>
                <td>{personnel.dateEmbauche}</td>
                <td>{personnel.echelon}</td>
                <td>{personnel.salair}</td>
                <td>
                  <div className="d-flex justify-content-end">
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewper/${personnel.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`editper/${personnel.id}`}
                    >
                      Mod
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deletePer(personnel.id)}
                    >
                      Sup
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
