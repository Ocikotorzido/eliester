import React, {useState} from 'react'



const Home = () => {
    

    return (
        <div className="card">
            <div className="card-header">
            </div>
            <div className="card-body">
                <h2>Bienvenido</h2>
                <p>{currentUser.email}</p>
                <button className="logout-button">Salir</button>
            </div>
        </div>
    )
}

export default Home
