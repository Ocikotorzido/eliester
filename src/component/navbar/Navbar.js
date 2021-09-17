import React, {useState} from 'react'
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';


const Navbar = () => { 

    const up = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"});
    }

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar bg-dark d-flex justify-content-start align-items-center">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active bg-dark' : 'nav-menu bg-dark d-flex justify-content-center'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars fs-3">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key = {index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.tittle}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
