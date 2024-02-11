'use client'

import React, { ChangeEvent } from 'react';
import CURRENCY_DATA from '@/files/currency.json';

/**
 * Represents the parameters for the input components.
 */
export interface IInputParams {
    change?: (
        event: ChangeEvent<HTMLInputElement>
    ) => void;
}

/**
 * Options component for selecting a currency.
 * @param props - The component props.
 * @param ref - The ref for the input element.
 * @returns The rendered Options component.
 */
const Options = React.forwardRef<HTMLInputElement, IInputParams>(function Options(props, ref) { 
    
    /**
     * Displays the currency options.
     * @returns An array of JSX elements representing the currency options.
     */
    function displayOptions(): React.JSX.Element[] {
        return Object.entries(CURRENCY_DATA).map(([key, data]) => {
            return (
                <div key={data.name}>
                    <input ref={ref} itemID={key} type='radio' name='currency' value={data.value} onChange={props.change}/>
                    <label htmlFor={data.name}>{key}</label>
                </div>
            );
        });
    }

    return (
        <div>
            <fieldset className='flex flex-row gap-3.5 items-center justify-center'>
                <legend className='text-center	'>Choose Currency</legend>
                {displayOptions()}
            </fieldset>
        </div>
    );
});

export default Options;