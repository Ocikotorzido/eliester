import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from "./component/navbar/Navbar";
import Proyectos from './component/proyectos/Proyectos';
import Footer from './component/footer/Footer';
import Cover from "./component/cover/Cover";
import Contenido from './component/contenido/Contenido';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Navbar/>
                <Cover/>
                <Proyectos/>
                <Footer/>
            </Route>
            <Route exact path="/About">
                <Navbar/>
                <Contenido/>
                <Footer/>
            </Route>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);