import React from 'react';
import Input from './input';
import Options from './options';

export default function Converter(): React.JSX.Element {
    return (
        <div className='md flex flex-col gap-3.5'>
            <Input/>
            <Options/>
        </div>        
    )
}