import React, { ChangeEvent, forwardRef } from 'react';
import { IInputParams } from '@/components/options';

/**
 * Input component for entering a numeric value.
 *
 * @component
 * @param {IinputParams} props - The input component props.
 * @param {React.Ref<HTMLInputElement>} ref - The ref for the input element.
 * @returns {JSX.Element} The rendered input component.
 */
const Input = forwardRef<HTMLInputElement, IInputParams>(function Input(props, ref) {
    return (
        <div className={`inline-block align-top`}>
            <input ref={ref} type='number' min={0} placeholder='Enter Amount' onChange={props.change}
            className='sm bg-gray-100 rounded-lg text-black border-slate-300 border-2 h-12 text-xl'/>
        </div>
    );
});

export default Input;