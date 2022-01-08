import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './RouteComp';
import s from './Style.module.css';

function Header() {
    return (
        <div className={s.header}>
            <span> <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.active : ''}>PreJunior</NavLink> </span>
            <span> <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : ''}>Junior</NavLink> </span>
            <span> <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : ''}>Junior Plus</NavLink></span>
            <span> <NavLink to={'/error'} className={({isActive}) => isActive ? s.active : ''}>Error</NavLink></span>

        </div>
    )
}

export default Header
