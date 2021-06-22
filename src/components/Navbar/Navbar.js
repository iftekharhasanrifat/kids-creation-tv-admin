import React from 'react';
import {
    Link
  } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to=""className="navbar-brand">Kids Creation Tv</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="addprogram"className="nav-link">Add Programs</Link>
                        <Link to="addupcomingprograms"className="nav-link">Add Upcoming Programs</Link>
                        <Link to="addkidsnews"className="nav-link">Add Kids News</Link>
                        <Link to="signin"className="nav-link">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;