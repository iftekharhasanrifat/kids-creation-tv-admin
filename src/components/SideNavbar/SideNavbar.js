import React from 'react';

const SideNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Kids Creation Tv</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Add Programs</a>
                        <a className="nav-link" href="#">Add Upcoming Programs</a>
                        <a className="nav-link" href="#">Add Kids News</a>
                        <a className="nav-link" href="#" >Login</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SideNavbar;