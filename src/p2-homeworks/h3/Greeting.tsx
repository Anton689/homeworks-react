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

    const inputClass = error ==='Error' ? <div className={s.error}>{error}</div> : '' // need to fix with (?:) //верстка

    return (
        <div>
            <input value={name} onChange={setNameCallback}  onKeyPress={onPressKeyHandler} onFocus={onFocusHandler} className={s.inputClass}/>
            <button disabled={button} onClick={addUser} className={s.buttonAdd}>ADD</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            {inputClass}



        </div>
    )
}

export default Greeting
