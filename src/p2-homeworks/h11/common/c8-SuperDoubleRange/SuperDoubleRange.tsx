import { Slider } from '@material-ui/core'
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'



type SuperDoubleRangePropsType =  {
    onChangeRange?: (value: [number, number]) => void
    setValue: (value: number[])=> void
    min?: number
    max?: number
    step?: number
    value: number[]

};

// type SuperDoubleRangePropsType = {
//
//     // min, max, step, disable, ...
// }

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {  setValue, value
        // min, max, step, disable, ...
    }
) => {

    // сделать самому, можно подключать библиотеки
    const handleChange = (event:any, newValue: number | number[]) => {
        setValue(newValue as number[]);

    };

    return (
        <>
            <Slider
                style={{width: '7%'}}
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
            />
        </>
    )
}

export default SuperDoubleRange
