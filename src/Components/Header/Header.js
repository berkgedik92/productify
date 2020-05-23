import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <h1 className="logo"><NavLink className="header__productify" to="/">PRODUCTIFY <FontAwesomeIcon icon={faRocket}/></NavLink></h1>
            </div>
        )
    }
}