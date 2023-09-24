import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class CreatPersonnelComponents extends Component {

    constructor(props) {
        super(props);
        this.state = {

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
            
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changecinHandler = this.changecinHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAdressHandler = this.changeAdressHandler.bind(this);
        this.changesexHandler = this.changesexHandler.bind(this);
        this.changephoneHandler = this.changephoneHandler.bind(this);
        this.changedateOfBirthHandler = this.changedateOfBirthHandler.bind(this);
        this.changeechelonHandler = this.changeechelonHandler.bind(this);
        this.changesalairHandler = this.changesalairHandler.bind(this);
        this.changefonctionHandler = this.changefonctionHandler.bind(this);
        this.changedateEmbaucheHandler = this.changedateEmbaucheHandler.bind(this);
      
    }
   
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changecinHandler= (event) => {
        this.setState({cin: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeAdressHandler= (event) => {
        this.setState({adress: event.target.value});
    }
    changesexHandler=(event) => {
        this.setState({sex: event.target.value});
    }
    changephoneHandler=(event) => {
        this.setState({phone: event.target.value});
    }
    changedateOfBirthHandler=(event) => {
        this.setState({dateOfBirth: event.target.value});
    }
    changeechelonHandler=(event) => {
        this.setState({echelon: event.target.value});
    }
    changesalairHandler=(event) => {
        this.setState({salair: event.target.value});
    }
    changefonctionHandler=(event) => {
        this.setState({fonction: event.target.value});
    }
    changedateEmbaucheHandler=(event) => {
        this.setState({dateEmbauche: event.target.value});
    }

   

    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Personnel</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Cin: </label>
                                        <input placeholder="cin" name="cin" className="form-control" 
                                            value={this.state.cin} onChange={this.changecinHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email : </label>
                                        <input placeholder="Email Address" name="email" className="form-control" 
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Adress : </label>
                                        <input placeholder="adress" name="adress" className="form-control" 
                                            value={this.state.adress} onChange={this.changeAdressHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Sex: </label>
                                        <input placeholder="sex" name="sex" className="form-control" 
                                            value={this.state.sex} onChange={this.changesexHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Phone : </label>
                                        <input placeholder="phone" name="phone" className="form-control" 
                                            value={this.state.phone} onChange={this.changephoneHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> DateOfBirth: </label>
                                        <input placeholder="dateOfBirth" name="dateOfBirth" className="form-control" 
                                            value={this.state.dateOfBirth} onChange={this.changedateOfBirthHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Echelon : </label>
                                        <input placeholder="echelon" name="echelon" className="form-control" 
                                            value={this.state.echelon} onChange={this.changeechelonHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Salair : </label>
                                        <input placeholder="salair" name="salair" className="form-control" 
                                            value={this.state.salair} onChange={this.changesalairHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Fonction : </label>
                                        <input placeholder="fonction" name="fonction" className="form-control" 
                                            value={this.state.fonction} onChange={this.changefonctionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> DateEmbauche: </label>
                                        <input placeholder="dateEmbauche" name="dateEmbauche" className="form-control" 
                                            value={this.state.dateEmbauche} onChange={this.changedateEmbaucheHandler}/>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        );
    }
}

export default CreatPersonnelComponents;
