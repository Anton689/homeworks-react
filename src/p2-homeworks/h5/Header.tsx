import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './RouteComp';
import s from './Style.module.css';

function Header() {
    return (

        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : s.link}>Junior+</NavLink>
            <NavLink to={'/error'} className={({isActive}) => isActive ? s.active : s.link}>Error</NavLink>
            <div className={s.drop}>Menu</div>
        </div>

    )
}

export default Header;
