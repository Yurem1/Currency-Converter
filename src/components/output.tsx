import React from 'react';

/**
 * Represents the parameters for the output component.
 */
interface IOutputParams {
    value?: number | undefined;
}

/**
 * Renders the output component.
 * @param {Object} props - The component props.
 * @param {number} props.value - The value to display in the output.
 * @returns {JSX.Element} - The rendered output component.
 */
export default function Output({value}: IOutputParams) {
    return (
        <div>
            <input type='text' readOnly={true} value={value ? value : 0} 
            className='sm bg-gray-100 rounded-lg text-black border-slate-300 border-2 h-12 text-xl'/>
        </div>
    );
}

