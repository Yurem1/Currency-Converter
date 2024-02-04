'use client'

import React, { useEffect, useRef, useState } from 'react';

interface IOptions {
    classes?: string
}

const Options = React.forwardRef<HTMLDivElement, IOptions>(function Options(props, ref) {
    return (
        <div className={`${props.classes}`}>
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
            </fieldset>
        </div>
    )
});

export default Options;