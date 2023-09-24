
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";

export default function EditPer() {
  
 let navigate=useNavigate();

 const {id}=useParams();

  const [personnel, setPersonnel] = useState({
    firstName:"",
		lastName:"",
		 cin:"",
		email:"",
		sex:"",
        phone:"",
        dateOfBirth:"",
		photo:"",
		echelon:"",
		salair:"",
        fonction:"",
        dateEmbauche:""
  });

  const { firstName,lastName,cin,email,sex,phone,dateOfBirth,echelon,salair,fonction,dateEmbauche } = personnel;

  const onInputChange = (e) => {
    setPersonnel({ ...personnel, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPer();
  }, []);
  
 const onSubmit=async (e)=>{
   e.preventDefault();
   await axios.put(`http://localhost:8080/personnel/per/${id}`,personnel)
   navigate("/")
 };

 const loadPer = async () => {
    const result = await axios.get(`http://localhost:8080/personnel/per/${id}`);
    setPersonnel(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Modifier Personnel</h2>

<form onSubmit={(e) => onSubmit(e)}>
<div className="text-primary">
              <label htmlFor="Name" className="form-label">
                NOM
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="lastName" className="form-label">
                PRENOM
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrez votre prénom"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="cin" className="form-label">
               CIN
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrez votre cin"
                name="cin"
                value={cin}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrez votre email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="sex" className="form-label">
                GENRE
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrez"
                name="sex"
                value={sex}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="phone" className="form-label">
                PHONE
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrez votre numero telphone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="dateOfBirth" className="form-label">
                DATE NAISSANCE
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Entrez votre date de naissance"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="echelon" className="form-label">
                ECHEL
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="echelon"
                name="echelon"
                value={echelon}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="salair" className="form-label">
                SALAIRE
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Entrez votre salair"
                name="salair"
                value={salair}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="fonction" className="form-label">
                FONCTION
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Entrez votre fonction"
                name="fonction"
                value={fonction}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-primary">
              <label htmlFor="dateEmbauche" className="form-label">
                DATE EMBAUCHE
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrez votre date d embauche"
                name="dateEmbauche"
                value={dateEmbauche}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <h1></h1>
            <button type="submit" className="btn btn-outline-primary">Enregistrer</button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Annuler
            </Link>
            </form>
        </div>
      </div>
    </div>
  );
}