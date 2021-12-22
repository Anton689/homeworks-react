import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onPressKeyHandler: (e:KeyboardEvent<HTMLInputElement>) => void;
    onFocusHandler: (e:DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => void;
    button: boolean;
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onPressKeyHandler, onFocusHandler, button} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:) //верстка

    return (
        <div>
            <input value={name} onChange={setNameCallback}  onKeyPress={onPressKeyHandler} onFocus={onFocusHandler} className={inputClass}/>
            <span>{error}</span>
            <button disabled={button} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div></div>
        </div>
    )
}

export default Greeting
