import React, { forwardRef } from 'react';

interface IParams {
    classes?: string;
}

const Input = forwardRef<HTMLInputElement, IParams>(function Input(props, ref) {
1
    return (
        <div className={`inline-block align-top ${props.classes}`}>
            <input 
            ref={ref}
            type='number' 
            placeholder='Enter $$$'
            className='sm bg-gray-100 rounded-lg text-black border-slate-300 border-2 h-12 text-xl'
            />
        </div>
    )
});

export default Input;