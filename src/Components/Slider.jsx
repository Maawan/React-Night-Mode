import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
function Slider(){
    const [theme , changeTheme] = useContext(ThemeContext);
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/1400x500/?spring" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h2 className={theme === "light" ? "text-light" : "text-dark"}>Welcome to i-Coder</h2>
          <p className={theme === "light" ? "text-light" : "text-dark"}>A Place where you will find everything nonsense :)</p>
          <button className="btn btn-light mx-2">Blogs</button>
          <button className="btn btn-danger mx-2">News</button>
          <button className="btn btn-primary mx-2   ">Technology</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/1400x500/?nature,rainly" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h2 className={theme === "light" ? "text-light" : "text-dark"}>Welcome to i-Coder</h2>
          <p className={theme === "light" ? "text-light" : "text-dark"}>A Place where you will find everything nonsense :)</p>
          <button className="btn btn-light mx-2">Blogs</button>
          <button className="btn btn-danger mx-2">News</button>
          <button className="btn btn-primary mx-2   ">Technology</button>
        </div>

      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/1400x500/?autum" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h2 className={theme === "light" ? "text-light" : "text-dark"}>Welcome to i-Coder</h2>
          <p className={theme === "light" ? "text-light" : "text-dark"}>A Place where you will find everything nonsense :)</p>
          <button className="btn btn-light mx-2">Blogs</button>
          <button className="btn btn-danger mx-2">News</button>
          <button className="btn btn-primary mx-2   ">Technology</button>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
    )
}
export default Slider;