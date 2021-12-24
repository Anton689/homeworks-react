import React from 'react'
import {AffairType} from './HW2';
import affairs from './Affairs';
import Affairs from './Affairs';
import s from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType; // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }// need to fix

    return (
        <div className={s.affairStyle}>
            <span className={s.nameStyle}>{props.affair.name}</span>
            <span className={s.priorityStyle}>{props.affair.priority}</span>

            <button onClick={deleteCallback} className={s.deleteButton}>delete</button>
        </div>
    )
}

export default Affair
