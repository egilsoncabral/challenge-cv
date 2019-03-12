import React, { Component } from 'react';
import logo from '../assets/img/account.png'
import '../assets/css/style-login.css';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import * as ErrorHandler from '../utils/errorHandler'

import axios from 'axios';

const CLIENT_ID = "a7b542cdf81966478e7b";
const REDIRECT_URI = "http://localhost:3000/";
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.redirectUser = this.redirectUser.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault()
    axios({
      method: 'get',
      url: `http://localhost:5000/authentication`,
      params: {
        username: this.state.username,
        password: this.state.password
      },
      crossdomain: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => {
      console.log(response)
      this.keepTokenSession(response.data.access_token);
      this.redirectUser("/home");
    }).catch((error) => {
      ErrorHandler.handleToasts(error)
    })
  }

  redirectUser = (path) => {
    this.props.history.push(path);
  }

  keepTokenSession = (tokenValue) => {
    sessionStorage.setItem('token', tokenValue);
  }

  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
      if (code) {
        axios({
          method: 'get',
          url: `http://localhost:5000/oauth/redirect`,
          params: {
            code: code,
          },
          crossdomain: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
          }
        })
        .then(response => {
          this.keepTokenSession(response.data.access_token);
          this.redirectUser("/home");
        }).catch((error) => {
          ErrorHandler.handleToasts(error)
        })
       
      }
    
  }

  render() {
    return (
      <div id="login-container">
        <div id="container" className="container valign-wrapper">
          <div id="login-page" className="row card-panel">
            <div className="center-align s3">
              <form className="login-form">
                <div className="row">
                  <div className="input-field col s12">
                    <img src={logo} alt="logo" className="circle responsive-img valign profile-image-login" />
                    <p className="center login-form-text">Challenge</p>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <input id="username" type="text" tabIndex="2" onChange={this.handleChange}
                      className="validate" required />
                    <label htmlFor="username" className="center-align">Usuário</label>
                    <span id="msg-user-validation" className="helper-text" data-error="wrong"
                      data-success="right">usuário não informado</span>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <input id="password" type="password" tabIndex="3"
                      onChange={this.handleChange} className="validate" required />
                    <label htmlFor="password">Senha</label>
                    <span id="msg-password-validation" className="helper-text"
                      data-error="wrong"
                      data-success="right">senha não informada</span>
                  </div>
                </div>
                <div className="row buttons">
                  <div className="input-field center-align">
                    <button id="btn-login" onClick={(event) => this.handleClick(event)} tabIndex="1"
                      className="btn blue-grey col s12">Login</button>                    
                  </div>
                  <div className="input-field center-align">
                       <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`} id="github-button" className="btn btn-block btn-social btn-github">
                        <i className="fa fa-github"></i> Sign in with Github</a> 
                        
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
