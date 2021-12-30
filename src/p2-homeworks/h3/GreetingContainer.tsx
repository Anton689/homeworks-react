import React, {ChangeEvent, useState, KeyboardEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';
import {type} from 'os';

type GreetingContainerPropsType = {
    users: Array<UserType>; // need to fix any
    addUserCallback: (name: string) => void; // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [button, setButton] = useState(false);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)

    }

    const addUser = () => {
        if (!name.trim() || parseInt(name)) {
            setError('Error');
            setName('');
            setButton(true);
        } else {
            //setButton(false);
            setError('');
            setName('');
            alert(`Hello ${name} !`);
            addUserCallback(name);
            // need to fix
        }
    }

    const onFocusHandler = (e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
        setError('')
        setButton(false)
    }

    const onPressKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser();
            setName('')
        }
    }


    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onPressKeyHandler={onPressKeyHandler}
            onFocusHandler={onFocusHandler}
            button={button}
        />
    )
}

export default GreetingContainer
