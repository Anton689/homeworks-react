import React, {useState} from 'react';
import s from './App.module.css';
import HW1 from '../../../p2-homeworks/h1/HW1';
import HW2 from '../../../p2-homeworks/h2/HW2';
import HW3 from '../../../p2-homeworks/h3/HW3';
import HW4 from '../../../p2-homeworks/h4/HW4';
import HW5 from '../../../p2-homeworks/h5/HW5';
import {Theme} from '../../../Theme';

function App() {

    const [themeColor, setThemeColor] = useState(s.black)

    const changeColor = () => {
        themeColor === s.black ? setThemeColor(s.whiteTheme) : setThemeColor(s.black)

    }

    return (
        <div className={`${s.App} ${themeColor}`} >
            <div className={s.reactHw}>react homeworks:</div>
            <div className={s.themeButton}>
                <Theme className={changeColor} themeColor={themeColor}/>
            </div>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>


        </div>
    )
}

export default App
