import React, { useEffect,useState,} from "react";
import {  Link ,useParams } from "react-router-dom";
import axios from "axios";

const ProfilPer = () => {
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
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${personnel.firstName} ${personnel.lastName}`}
								</h5>
								
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											NOM :
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{personnel.firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											PRENOM : 
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{personnel.lastName}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email :
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{personnel.email}
										</p>
									</div>
								</div>
								<hr />
								<div className="d-flex justify-content-end">
    <Link className="btn btn-primary my-2 mr-2" to="/addconge">Ajouter Congé</Link>
    <Link className="btn btn-primary my-2" to="/">Ajouter Absence</Link>
</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfilPer;