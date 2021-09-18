import React from 'react'
import "./Proyectos.css";
import pastel from "../../media/pastel.jpg";

import { Link, Redirect } from 'react-router-dom';


const Proyectos = () => {

    return (
        <div class="row p-5 espacio">
            <div className="col-lg-4 mt-5 ">
                <div class="card at ">
                    <img src={pastel} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>            </div>
                </div>
            </div>
            <div className="col-lg-4 mt-5 ">
                <div class="card at ">
                    <img src={pastel} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>            </div>
                </div>
            </div>
            <div className="col-lg-4 mt-5 ">
                <div class="card at ">
                    <img src={pastel} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>            </div>
                </div>
            </div>
            <div className="col-lg-4 mt-5 ">
                <div class="card at ">
                    <img src={pastel} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>            </div>
                </div>
            </div>
            <div className="col-lg-4 mt-5 ">
                <div class="card at ">
                    <img src={pastel} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>            </div>
                </div>
            </div>
            <div className="col-lg-4 mt-5 ">
                <div class="card at ">
                    <img src={pastel} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>            </div>
                </div>
            </div>
            
        </div>
    )
}

export default Proyectos
