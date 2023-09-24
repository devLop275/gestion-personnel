import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link} from 'react-router-dom';


export default function ListerConge() {
  const [conges, setAbsence] = useState([]);

  useEffect(() => {
    loadAbsenceWithNames();
  }, []);

  const loadAbsenceWithNames = async () => {
    try {
      const response = await axios.get("http://localhost:8080/absence/getabs");
      setAbsence(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des absences avec les noms :", error);
    }
  };


  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center m-4">Liste des Absences</h1>
          <div className="col text-right">
          <Link className="btn btn-primary my-2" to="/">
            Ajouter Absence
          </Link>
    </div>
        <table className="table border shadow">
          <thead>
            <tr>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>DATE Absence</th>
              <th>DATE REPRISE</th>
              <th>DUREE</th>
              <th>MOTIF</th>
            </tr>
          </thead>
          <tbody>
            {conges.map((absence, index) => (
              <tr key={index}>
                <td>{absence[1]}</td> {/* Nom */}
                <td>{absence[2]}</td> {/* Prénom */}
                <td>{absence[0].date_abs}</td>
                <td>{absence[0].date_reour}</td>
                <td>{absence[0].dure_abs}</td>
                <td>{absence[0].motif_abs}</td>
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