'use client'

import React from 'react';
import CURRENCY_DATA from '../utility/currency.json';

const Options = React.forwardRef<HTMLDivElement>(function Options(props, ref) { 

    function displayOptions(): React.JSX.Element[] {
        return Object.entries(CURRENCY_DATA).map(([key, data]) => {
            return (
                <div key={data.name}>
                    <input type='radio' name='currency' value={data.value}/>
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