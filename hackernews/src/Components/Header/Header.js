import React from "react";
import './Header.css'

export const Header = () => {
    return  (
        <div className='headerWrapper'>
            <img src="./logo.gif" alt="logo" />
            <h1 className="heading">Hacker News</h1>
        </div>
    ) 
}