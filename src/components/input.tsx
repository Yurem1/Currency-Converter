import React, { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>(function Input(props, ref) {
1
    return (
        <div className={`inline-block align-top`}>
            <input 
            ref={ref}
            type='number' 
            min={0}
            placeholder='Enter Amount'
            className='sm bg-gray-100 rounded-lg text-black border-slate-300 border-2 h-12 text-xl'
            />
        </div>
    )
});

export default Input;