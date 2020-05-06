import React, { Component } from 'react';
import "./css/business-home.component.css";
import BusinessLogin from "./business-login.component";
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render(){
        return(
            <div className = "container-home">
                <div className = 'login-reg-panel col-sm-12 col-md-12'>
                    <h2 className = 'heading-MS'>
                    <p>Appleseed Initiative:<br></br>
                        Site Assistant</p>
                    </h2>
                    <p className = 'businessDetail'>
                    Create and maintain a simple website for your business. 
                    Add changes and updates easily. This is a free service that helps you to 
                    update your customers and let them know how you are doing business today. 
                    </p>

                    <h5>It's free. It's easy. Create a site for your business today.</h5>
                    <Link to="/add">
                         <button className= "btn btn-primary btn-outline-secondary btnRegister">Add a Business</button>
                    </Link>

                    <h6 className = 'h6Message'>Already have a site? Login to update:</h6>
                    <BusinessLogin/>
                </div>

                    <div className = 'clientsPanel'>
                    <h3>
                       Sample Sites
                    </h3>

                    <Link to="/view/diversionspgports">
                        Diversions
                    </Link>
                </div>

            </div>
        );

    }
}