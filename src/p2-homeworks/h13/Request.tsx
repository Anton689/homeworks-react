import React, {ChangeEvent, useState} from 'react';
import {RequestsAPI} from './RequestsAPI';
import axios from 'axios';

export const Request = () => {
    const [checkValue, setCheckValue] = useState(false)
    const [result, setResult] = useState('')


    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
            setCheckValue(e.currentTarget.checked)
    }

    const onClickHandler = async () => {
        // RequestsAPI.changeSuccess(checkValue)
        //     .then(res=> {
        //         setResult(res.data)
        //     })
        //     .catch (error => {
        //       console.log( {...error} );
        //         setResult( error.response ? error.response.data.errorText : error.message )})
        const res = await RequestsAPI.changeSuccess(checkValue)
        try {
            setResult(res.data)
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setResult( error.response ? error.response.data.errorText : error.message)
            }

        }
    }

    return (
        <div>
            <div>
                <button onClick={onClickHandler}>Button</button>
            </div>

            <div>
                <input type={'checkbox'} checked={checkValue} onChange={onChangeCallBack}/>
            </div>
            <div> {JSON.stringify(result)}</div>
        </div>
    );
};

