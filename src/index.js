import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from "./component/navbar/Navbar";
import Proyectos from './component/proyectos/Proyectos';
import Footer from './component/footer/Footer';
import Cover from "./component/cover/Cover";
import Login from './component/login/Login';
import Registro from './component/login/Registro';
import Home from './component/login/Home';


ReactDOM.render(
    <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Navbar/>
                    <Cover/>
                    <Proyectos/>
                    <Footer/>
                </Route>
                <Route exact path="/login">
                    <Navbar/>
                    <Login/>
                
                </Route>
                <Route exact path="/registro">
                    <Navbar/>
                    <Registro/>
                </Route>
                <Route exact path="/home" component={Home}>
                </Route>
            </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);