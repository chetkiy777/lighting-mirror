import React from 'react'
import style from './style.module.css'
import logo from '../img/logo.png'

export const Header = () => {
    return(
        <div className={style.header}>
            <span className={style.logo}>
                <img src={logo}/>
                <a href="https://dekor.ua"> www.dekor.ua </a>
            </span>
        </div>
    )
}