'use client'

import React from 'react';

const Options = React.forwardRef<HTMLDivElement>(function Options(props, ref) {
    return (
        <div>
            <fieldset className='flex flex-row gap-3.5 items-center justify-center'>
                <legend className='text-center	'>Choose Currency</legend>
                <div>
                    <input 
                    type='radio' 
                    id='FRANC' 
                    value='FRF' 
                    name='currency'/>
                    <label htmlFor='FRANC'>FRF</label>
                </div>
                <div>
                    <input 
                    type='radio' 
                    id='POUND' 
                    value='GBP' 
                    name='currency'/>
                    <label htmlFor='POUND'>GBP</label>
                </div>
                <div>
                    <input 
                    type='radio' 
                    id='EURO' 
                    value='EUR' 
                    name='currency'/>
                    <label htmlFor='EURO'>EUR</label>
                </div>
            </fieldset>
        </div>
    )
});

export default Options;