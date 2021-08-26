import React from 'react';
import {useState} from 'react';
import Nav from './Nav';
import './Header.css';

function Header(props){
    const [gnbclick,gnbclickFunc]=useState("Initial");
    {props.mainConChange(gnbclick)}
    return(
        <div className="header">
            <div className="inner-header">
                <Nav gnbclickFunc={gnbclickFunc}/>
            </div>
        </div>
    )
}

export default Header;