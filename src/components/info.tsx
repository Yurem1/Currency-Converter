import React from "react";

/**
 * Renders the Info component.
 * @returns The JSX.Element representing the Info component.
 */
export default function Info(): React.JSX.Element {
    return (
        <div className='text-center'>
            <h1 className=''>
                Currency Converter
            </h1>
            <p>
                Type in how much you wanna convert in dollars
            </p>
        </div>
    );
}