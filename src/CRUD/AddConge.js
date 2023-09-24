import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddConge() {
  let navigate = useNavigate();

  const [conge, setConge] = useState({
    personnel: { id: '' },
    date_debu: '',
    date_fin: '',
    date_reprise: '',
  });

  const [personnelList, setPersonnelList] = useState([]);

  const onPersonnelSelect = (e) => {
    const selectedPersonnelId = e.target.value;
    setConge({ ...conge, personnel: { id: selectedPersonnelId } });
  };

  const onInputChange = (e) => {
    setConge({ ...conge, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/conge/addForPersonnel/${conge.personnel.id}`, conge);

    navigate('/');
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/personnel')
      .then((response) => {
        setPersonnelList(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération de la liste des employés :', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Ajouter Congé</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="personnel_id" className="form-label">
                Employé
              </label>
              <select
                className="form-select"
                name="personnel_id"
                onChange={(e) => onPersonnelSelect(e)}
              >
                <option value="">Sélectionnez un employé</option>
                {personnelList.map((personnel) => (
                  <option key={personnel.id} value={personnel.id}>
                    {personnel.firstName} {personnel.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="date_debu" className="form-label">
                DATE DEBUT
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Entrez la date de début"
                name="date_debu"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date_fin" className="form-label">
                DATE FIN
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Entrez la date de fin"
                name="date_fin"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date_reprise" className="form-label">
                DATE REPRISE
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Entrez la date de reprise"
                name="date_reprise"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Enregistrer
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Annuler
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
