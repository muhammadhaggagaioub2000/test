import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  
  window.addEventListener("scroll", function(){
    if(window.scrollY >=100){
      {
        var nav = document.querySelector(".navbar").classList.replace("p-3","p-0");
      }
    }
    else
        nav = document.querySelector(".navbar").classList.add("p-3")

  })
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light bg-dark p-3  sticky-top ">
    <div className="container">
  <Link className="navbar-brand text-light fs-1 fw-bold" to="/home">Start Framework</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink className="nav-link text-light fs-5" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-light fs-5  mx-4" to="/portofolio">portofolio</NavLink>
      </li>
        <li className="nav-item">
        <NavLink className="nav-link text-light fs-5 " to="/contact">Contact</NavLink>
        </li>
    </ul>
  </div>
    </div>
</nav>
</>  
)
}
