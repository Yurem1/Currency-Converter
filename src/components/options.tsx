'use client'

import React, { useEffect, useRef, useState } from 'react';

const Options = React.forwardRef(function Options(props, ref) {
    return (
        <div>
            <fieldset>
                <legend>Choose Currency</legend>
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