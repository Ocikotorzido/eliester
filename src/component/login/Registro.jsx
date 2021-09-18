import React,{ useState } from 'react'

const Registro = () => {

    return (
        <div className="card">
            <div className="card-header">
                <h2>Registro</h2>
            </div>
            <div className="card-body">
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Contraseña"/>
                    <input type="password" placeholder="Confirmar Contraseña"/>
                    <input type="submit" value="Registrar"/>
                    
                </form>
            </div>
        </div>

    )
}

export default Registro
