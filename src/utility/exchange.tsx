import CURRENCY_DATA from '../utility/currency.json'

export interface IExchangeParams {
    currency: string;
    amount: number;
}

/**
 * Represents a utility class for currency exchange operations.
 */
export default class Exchange {
    /**
     * Finds the value of a currency in the CURRENCIES object.
     * @param obj - The exchange parameters.
     * @param obj.currency - The currency to search for.
     * @param obj.amount - The amount of currency to exchange.
     * @returns The value of the currency multiplied by the amount if found, otherwise 0.
     */
    public static exchange(obj: IExchangeParams): number {
        const entries = Object.entries(CURRENCY_DATA);

        for(let i = 0; i < entries.length; i++) {
            if(entries[i][0] === obj.currency) {
                return Number((entries[i][1].value * obj.amount).toFixed(3));
            }
        }

        return 0
    }

    /**
     * Reduces the state based on the given action.
     * @param state - The current state.
     * @param action - The action to be performed.
     * @returns The updated state.
     */
    static reducer(state: IExchangeParams, action: string | number): IExchangeParams {
        if (typeof action === 'string') {
            return {
                ...state,
                currency: action
            };
        } else {
            return {
                ...state,
                amount: action
            };
        }
    }
}
