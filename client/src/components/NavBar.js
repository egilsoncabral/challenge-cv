import React ,{Component} from 'react'
import Logo from '../assets/img/hacker-logo.png'
import {Redirect} from 'react-router-dom';
import Menu from './Menu';
import PropTypes from 'prop-types';

class NavBar extends Component{
    
    state = {
        redirect: false
    }

    redirectUser = () => {
        this.setState({ redirect: true })
    }
    
    logout(event){
        event.preventDefault();
        sessionStorage.clear()
        this.redirectUser();
    }
    

    render(){
        const { redirect } = this.state;
        if (redirect) {
           return <Redirect to='/'/>;
        }
        return ( <nav>
            <div className="row nav-wrapper blue darken-4" style={{padding: '0 5px 0px 5px'}}>
              <div className="col">
              <a id="nav-menu" href="#!" tabIndex="0" data-target="slide-out" onClick={() => this.openMenu()}><img src={Logo} alt="logo" width='25px' height='25px'/></a>
              </div>
              <div className="col">
              <a tabIndex="0" href="!#"><h5>Hacker News</h5></a>
              </div>
              
              <div className="col right">
              <a href="#!" tabIndex="0" onClick={(event) => this.logout(event)}><i className="material-icons">exit_to_app</i></a>
              </div>
              <div className="col right">
                <Menu filterByCategorie={this.props.filterByCategorie}/>
              </div>
            </div>
          </nav>)
    }

}
NavBar.propTypes ={
  filterByCategorie: PropTypes.func.isRequired,
};
export default NavBar