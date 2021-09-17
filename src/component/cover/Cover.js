import React from 'react'
import "./Cover.css";
import planeta from "../../media/torta.mp4";
import Typed from 'react-typed';

const Cover = () => {
      
    return (
        <div className="cover-container text-center ">
            <video className="video" src={planeta} autoPlay loop muted />
            <h1>Dulce Eliester</h1>
            <Typed className="letras"
                strings={[
                    'Sigueme en instagram',
                    '@Dulce_eliester_']}
                typeSpeed={50}
                backSpeed={50}
                loop>
            </Typed>
        </div>
    )
}

export default Cover