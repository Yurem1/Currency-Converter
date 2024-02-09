'use client';

import React, { ChangeEvent } from 'react';
import Input from './input';
import Options from './options';
import Output from './output';
import Exchange, { IExchangeParams } from '@/utility/exchange';

/**
 * Renders a currency converter component.
 * @returns The JSX element representing the currency converter.
 */
export default function Converter(): React.JSX.Element {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const optionsRef = React.useRef<HTMLInputElement>(null);

    const [state, dispatch] = React.useReducer(
        Exchange.reducer, { 
            currency: '',
            amount: 0
        } as IExchangeParams
    )


    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(Number(event.target.value));
    }

    const optionsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(String(event.target.getAttribute('itemID')))
    }

    const outputValue: () => number = () => {
        return Exchange.exchange(state)
    }

    return (
        <div className='md flex flex-col gap-3.5'>
            <Input ref={inputRef} change={inputHandler}/>
            <Options ref={optionsRef} change={optionsHandler} />
            <Output value={outputValue()}/>
        </div>        
    );
}