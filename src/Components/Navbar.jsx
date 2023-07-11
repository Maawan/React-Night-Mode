import React, { useContext } from 'react';
import TogglerButton from './TogglerButton';
import ThemeContext from '../Context/ThemeContext';
function Navbar(){
    let lightMode = "navbar navbar-expand-lg navbar-light bg-light";
    let darkMode = "navbar navbar-expand-lg navbar-dark bg-dark";
    const [theme , changeTheme] = useContext(ThemeContext);
    return (
        <nav className={theme === "light" ? lightMode : darkMode} style={{transition:"all 1s"}}>
    <a className="navbar-brand" href="#">iCoder :)</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./about.html">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Topics
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Technology</a>
            <a className="dropdown-item" href="#">Web Development</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Support</a>
            <a className="dropdown-item" href="#">Write for us</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./contact.html" tabindex="-1" aria-disabled="true">Contact us</a>
        </li>
        <li>
            <TogglerButton />
        </li>
        
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
    )
}
export default Navbar;