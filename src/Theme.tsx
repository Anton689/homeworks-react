import React from 'react';
import s from './p1-main/m1-ui/u1-app/App.module.css';

type propsType = {
    className: () => void;
    themeColor: any;
}

export function Theme(props: propsType) {
    const changeBgHandler = () => {
        props.className();
    }
    return (
        <button onClick={changeBgHandler}
                className={` ${props.themeColor === s.black ? s.buttonWhite : s.buttonBlack} 
                ${s.buttonStyle}`}>Color</button>
    )
}

