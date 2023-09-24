import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link} from 'react-router-dom';


export default function ListerConge() {
  const [conges, setConges] = useState([]);

  useEffect(() => {
    loadCongesWithNames();
  }, []);

  const loadCongesWithNames = async () => {
    try {
      const response = await axios.get("http://localhost:8080/conge/withNames");
      setConges(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des congés avec les noms :", error);
    }
  };


  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center m-4">Liste des Congés</h1>
          <div className="col text-right">
          <Link className="btn btn-primary my-2" to="/addconge">
            Ajouter Conge
          </Link>
    </div>
        <table className="table border shadow">
          <thead>
            <tr>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>DATE DEBUT</th>
              <th>DATE FIN</th>
              <th>DATE REPRISE</th>
            </tr>
          </thead>
          <tbody>
            {conges.map((conge, index) => (
              <tr key={index}>
                <td>{conge[1]}</td> {/* Nom */}
                <td>{conge[2]}</td> {/* Prénom */}
                <td>{conge[0].date_debu}</td>
                <td>{conge[0].date_fin}</td>
                <td>{conge[0].date_reprise}</td>
                <td>
                <button className="btn btn-outline-primary mx-2">
                      Mod
                    </button>
                <button
                      className="btn btn-danger mx-2" >Sup</button>
                      </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}