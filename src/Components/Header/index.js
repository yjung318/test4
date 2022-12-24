import React from 'react';
import {useNavigate} from 'react-router-dom';

import logo from '../../images/MyName.png';


import './Header.css'

const Header = () => {
    let navigate = useNavigate();

    return (
        <body>
            <header class="head">
                <nav class="nav">
                {/* <button onClick={() => {navigate("/")}} class="port__btn"><a href="#home" class="nav__link">Home</a></button>
                <button onClick={() => {navigate("/")}} class="port__btn"><a href="#portfolio" class="nav__link">Settings</a></button>
                <button onClick={() => {navigate("/")}} class="port__btn"><a href="#contacts" class="nav__link">Contact</a></button> */}
                    <u1 class="nav__list">
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#home" class="nav__link">Home</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#portfolio" class="nav__link">Settings</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#contacts" class="nav__link">Contact</a></l1>
                    </u1>
                </nav>
            </header>
        </body>
    )
}

export default Header;