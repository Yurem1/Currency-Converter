import React, { forwardRef } from 'react';

const Output = forwardRef<HTMLInputElement>(function Output(props, ref) {
    return (
        <div>
            <input 
            ref={ref} 
            type='text' 
            readOnly={true}
            className='sm bg-gray-100 rounded-lg text-black border-slate-300 border-2 h-12 text-xl'
            />
        </div>
    );
});

export default Output;