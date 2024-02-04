import React, { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>(function Input(props, ref) {
    return (
        <div>
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