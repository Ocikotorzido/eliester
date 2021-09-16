import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top bg-dark">
            <p className="col-md-4 mb-0 text-white">© 2021 Company, Inc</p>
            <ul class="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-white">Home</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-white">Features</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-white">FAQs</Link></li>
            </ul>
        </footer>
    )
}

export default Footer
