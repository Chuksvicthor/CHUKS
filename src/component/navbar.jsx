import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();
    return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
    <div class="container-fluid">
      <a class="navbar-brand " href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={() => {
                navigate("/")
            }}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => {
                navigate("/about")}}>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => {
                navigate("/pricing")
            }}>Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => {
                navigate("/store")}}>store</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}
