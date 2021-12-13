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
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.message}>
                <div className={s.text}>
                    {props.text}
                </div>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>

            </div>
            {/*<div className={s.div}>*/}
            {/*</div>*/}




        </div>

    )
}

export default Message
