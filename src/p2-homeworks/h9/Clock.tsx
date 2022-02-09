import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import 'moment/locale/ru';

function Clock() {
    const moment = require('moment');

    const [timerId, setTimerId] = useState<number>(0)
    const [,setDate] = useState<Date>(moment)
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        clearInterval(timerId)// stop
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(moment)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime =  moment().format('LTS')// fix with date
    const stringDate =  moment().format('ll') // fix with date


    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}

            </div>

            {show ?
                <div>
                    {stringDate}
                </div>
                : <br/>
            }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
