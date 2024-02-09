import React from 'react';

interface IOutputParams {
    value?: number | undefined
}

export default function Output({value}: IOutputParams) {
    return (
        <div>
            <input type='text' readOnly={true} value={value ? value : 0} 
            className='sm bg-gray-100 rounded-lg text-black border-slate-300 border-2 h-12 text-xl'/>
        </div>
    );
}

