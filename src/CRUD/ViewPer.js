import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const {id}=useParams();
   
     const [personnel, setPersonnel] = useState({
       firstName:"",
           lastName:"",
           email:""
         
     });

  useEffect(() => {
    loadPer();
  }, []);

  const loadPer = async () => {
    const result = await axios.get(`http://localhost:8080/personnel/per/${id}`);
    setPersonnel(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Détails du personnel</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {personnel.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>NOM:</b>
                  {personnel.firstName}
                </li>
                <li className="list-group-item">
                  <b>PRENOM:</b>
                  {personnel.lastName}
                </li>
                <li className="list-group-item">
                  <b>EMAIL:</b>
                  {personnel.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Retour
          </Link>

          
        </div>
      </div>
      <Link className="btn btn-primary my-2" to="/addconge">
            Ajouter Conge
          </Link>
    </div>
    
  );
}