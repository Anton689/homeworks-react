import React from 'react'
import Affair from './Affair'
import {AffairType, deleteAffair, FilterType} from './HW2'
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>;
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (_id: number) => void;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}
            <div className={s.buttonsAffairs}>
                <button onClick={setAll} className={s.setAll}>All</button>
                <button onClick={setHigh} className={s.setHigh}>High</button>
                <button onClick={setMiddle} className={s.setMiddle}>Middle</button>
                <button onClick={setLow} className={s.setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
