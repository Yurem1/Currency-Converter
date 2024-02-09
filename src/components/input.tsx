import React, { ChangeEvent, forwardRef } from 'react';

interface IinputParams {
    change?: (
        event: ChangeEvent<HTMLInputElement>
    ) => void;
}

const Input = forwardRef<HTMLInputElement, IinputParams>(function Input(props, ref) {
    return (
        <div className={`inline-block align-top`}>
            <input ref={ref} type='number' min={0} placeholder='Enter Amount' onChange={props.change}
            className='sm bg-gray-100 rounded-lg text-black border-slate-300 border-2 h-12 text-xl'/>
        </div>
    );
});

export default Input;