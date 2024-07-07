import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                  <a className="navbar-brand fw-bold" href="/"><h3>NewsWave</h3></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item fw-bold">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item fw-bold">
                        <a className="nav-link" href="/categories">About Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
        </nav>

      </div>
    )
  }
}

export default Navbar
