import CURRENCY_DATA from '@/files/currency.json'

/**
 * Represents the parameters for a currency exchange.
 */
export interface IExchangeParams {
    currency: string;
    amount: number;
}

/**
 * Represents a utility class for currency exchange operations.
 */
export default class Currency {
    /**
     * Finds the value of a currency in the CURRENCIES object.
     * @param obj - The object containing currency name, and amount to exchange
     * @returns The value of the currency multiplied by the amount if found, otherwise 0.
     */
    public static exchange(obj: IExchangeParams): number {
        const entries = Object.entries(CURRENCY_DATA);

        for(const [key, { value }] of entries) {
            if(key === obj.currency) {
                return Number(
                    (obj.amount * value).toFixed(3)
                )
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
