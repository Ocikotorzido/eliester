import React from 'react'
import "./Contenido.css"
import imagen from "../../media/images.jpg"

const Contenido = () => {
    return (
        <div className="container">
            <div className="fondo row bg-primary">
                <div className="col-lg-12 d-flex justify-content-center">
                    <img className="img-fluid rounded-circle" src={imagen}></img>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h1>Formacion</h1>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.</p>
                </div>
                <div className="col-lg-6">
                    <h1>Habilidades</h1>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h1>Formacion</h1>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.</p>
                </div>
                <div className="col-lg-6">
                    <h1>Habilidades</h1>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.</p>
                </div>
            </div>               
        </div>
    )
}

export default Contenido
