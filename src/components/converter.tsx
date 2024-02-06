'use client';

import React, { useRef } from 'react';
import Input from './input';
import Options from './options';
import Output from './output';
import Exchange from '@/utility/exchange';

export default function Converter(): React.JSX.Element {
    const inputRef = useRef<HTMLInputElement>();
    const outputRef = useRef<HTMLInputElement>();

    return (
        <div className='md flex flex-col gap-3.5'>
            <Input/>
            <Options/>
            <Output/>
        </div>        
    );
}