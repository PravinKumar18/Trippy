import React, { Component } from "react";
import "./Css/Navbar.css";
import {Link} from 'react-router-dom'
import { Menuitems } from "./Menuitems";
import Home from "./routes/Home";






class Navbar extends Component {

constructor(){    
  super();



}


state = { clicked: false };
  handleClick = () => { 
    this.setState({ clicked: !this.state.clicked });


  

  };
  render() {
    return (
      <nav className="Navbaritem">
        <h1 className="navbar-logo"><Link className="link" to="./" >Trippy</Link></h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
          {Menuitems.map((item, index) => {
            return ( 

              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>



            );
          })}
        </ul>
        <button>Sign Up</button>
      </nav>
    );
  }
}

export default Navbar;
