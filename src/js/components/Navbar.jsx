import React from "react";

const navbar= ()=> {
return (
    <nav className="navbar bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">StartBootstrap</a>
             <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
            <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
            </li>
            </ul>
        </div>
    </nav>
    );
};

export default navbar;