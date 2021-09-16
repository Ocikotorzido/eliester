import React from 'react'
import "./Proyectos.css";
import prueba from "../../media/prueba.jpg";
import git from "../../media/github.png";
import fonicular from "../../media/fonicular.png";
import congenial from "../../media/congenial.jpg"
import facial from "../../media/facial.jpg"
import neural from "../../media/neural.jpg"
import { Link, Redirect } from 'react-router-dom';


const Proyectos = () => {

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-4 text-center">
                    <h1 className="text-dark">Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={congenial}/>
                    <a href="https://github.com/Ocikotorzido/Web-page">
                        <img className="bloque img-fluid logo mt-2" src={git}/>    
                    </a>                  
                </div>

                <div className=" col-lg-4 text-center">
                    <h1 className="text-dark">Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={facial}/>
                    <a href="https://github.com/Ocikotorzido/Face">
                        <img className="bloque img-fluid logo mt-2" src={git}/>    
                    </a>           
                </div>
                    
                <div className="col-lg-4 text-center">
                    <h1 className="text-dark">Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={neural}/>
                    <a href="https://github.com/Ocikotorzido/IA">
                        <img className="bloque img-fluid logo mt-2" src={git}/>    
                    </a>                  
                </div>
                <div className="col-lg-4 text-center mt-5"></div>
                <div className="col-lg-4 text-center mt-5">
                    <h1 className="text-dark">Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <Link to="">
                        <img className="bloque img-fluid logo mt-2" src={git}/>    
                    </Link>       
                </div>
                <div className="col-lg-4 text-center mt-5"></div>
            </div>
        </div>
    )
}

export default Proyectos
