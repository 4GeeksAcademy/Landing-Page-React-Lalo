import React from "react";

function navbar(props){
return (<nav class="navbar bg-body-secondary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">StartBootstrap</a>
         <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Contact</a>
            </li>
        </ul>
    </div>
</nav>)
};

export default navbar;