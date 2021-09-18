import React,{ useState } from 'react'
import {Link} from 'react-router-dom'



const Login = () => {


    return (
        <div className="card">
            <div className="card-header">
                <h2>Ingresar</h2>
            </div>
            <div className="card-body">
                <form >
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Contraseña" />
                    <input type="submit" value="Ingresar"/>
                    
                </form>
                <p>No esta Registrado? <Link to="/registro">Registrarse</Link></p>
            </div>
        </div>

    )
}

export default Login
