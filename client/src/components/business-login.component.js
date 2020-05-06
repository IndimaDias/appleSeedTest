import React, { Component } from 'react';
import axios from 'axios';
import './css/business-login.components.css';


export default class BusinessLogin extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            username: '',
            password: '',  

            errorMessage: '',
        }
    }


    componentDidMount() {
        
    }

    onChangeUsername(e) {

        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }
        
    //    axios.post('http://localhost:5000/business/login/', user)
       axios.post('/business/login/', user)
            .then(res=> {
                console.log(res.data);
                //  window.location = 'edit/' + res.data;
            //    window.open("/edit/" + res.data, "_self");
                //    window.location.assign('/edit/'+ res.data);
              this.props.history.push('/edit/'+ res.data); // <--- The page you want to redirect your user to.

            })
            .catch((error) => {
                console.log( error.response.data);
                this.setState({errorMessage : error.response.data});
            });
    }

    render() {
        return (
        <div>
            {/* <h4 className = 'lblLogin'>Login</h4> */}
            <form onSubmit={this.onSubmit}>
                
                <div className="formGroup">
                    <input type ="text" 
                        required
                        className = "form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        placeholder = 'Username'
                        />
                </div>
                <div className="formGroup">
                    <input type ="password" 
                        required
                        className = "form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        placeholder = 'Password'
                        />
                </div>

                <div className="form-group">
                    <input type="submit" value="Login"
                        className="btn btn-primary" />
                </div>
                { this.state.errorMessage &&
                    <h3 className="error"> { this.state.errorMessage } </h3> }

            </form>
        </div>

        ) 
    }

}
