import React, { Component } from 'react';
import PerService from '../service/PerService';
import { withRouter } from 'react-router-dom';

class ListPersonnel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personnels: []
            
        }
        this.addPersonnels = this.addPersonnels.bind(this);
    }

    componentDidMount() {
        PerService.getAllPersonnel().then((res) => {
            this.setState({ personnels: res.data });
        });
    }

    addPersonnels() {
        this.props.history.push('/add-personnels');
    }

    render() {
        return (
            <div>
                <div className="row">
    <div className="text-center">
        <h2>List Personnels</h2>
    </div>
    <div className="col text-left">
        <button className="btn btn-primary" onClick={this.addPersonnels}>Add Personnel</button>
    </div>
    
</div>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>NOM</th>
                                <th>PRENOM</th>
                                <th>CIN</th>
                                <th>EMAIL</th>
                                <th>ADRESS</th>
                                <th>GENR</th>
                                <th>TEL</th>
                                <th>DATE NAISSANCE</th>
                                <th>FONCTION</th>
                                <th>DATE EMBAUCHE</th>
                                <th>ECHELON</th>
                                <th>SALAIR</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.personnels.map((personnel) => (
                                <tr key={personnel.id}>
                                    <td>{personnel.firstName}</td>
                                    <td>{personnel.lastName}</td>
                                    <td>{personnel.cin}</td>
                                    <td>{personnel.email}</td>
                                    <td>{personnel.adress}</td>
                                    <td>{personnel.sex}</td>
                                    <td>{personnel.phone}</td>
                                    <td>{personnel.dateOfBirth}</td>
                                    <td>{personnel.fonction}</td>
                                    <td>{personnel.dateEmbauche}</td>
                                    <td>{personnel.echelon}</td>
                                    <td>{personnel.salair}</td>
                                    <td>{personnel.photo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListPersonnel;
