import React from 'react'
import logo from './image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, fas,faStackOverflow } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid nav-background">
    <a class="navbar-brand" href="#"><img src={logo} className='logo'></img></a>
    <button class="navbar-toggler search-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse container" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 container home ">
        <li class="nav-item ">
          <a class="nav-link   sriracha-regular" aria-current="page" href="/"> <FontAwesomeIcon icon={fas.faHouse} />  Home
          </a> </li>
        <li class="nav-item">
          <a class="nav-link  sriracha-regular " href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  sriracha-regular " href="#about">About</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link sriracha-regular " >Contact</a>
        </li>
       
      </ul>
      <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary search-btn" type="submit">Search</button>
    </form>
  </div>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
