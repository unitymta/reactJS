import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import News from '../components/News';
import Home from '../components/Home';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/home">
                        <Link to="/home">React Router</Link>
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <NavLink to="/tin">Tin tuc</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tin-chi-tiet">Tin chi tiet</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lien-he">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;