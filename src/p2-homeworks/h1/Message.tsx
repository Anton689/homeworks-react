import React from 'react'
import s from './Message.module.css';

type propsType = {
    avatar: string;
    name: string;
    text: string;
    time: string;
}

function Message(props: propsType) {
    return (
        <div className={s.dialogWindow}>
            <img src={props.avatar} alt="" className={s.avatar}/>
            <div className={s.div}></div>
            <div className={s.message}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.text}>
                    {props.text}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
