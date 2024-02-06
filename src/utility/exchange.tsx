import CURRENCY_DATA from '../utility/currency.json'

/**
 * Represents a utility class for currency exchange.
 */
export default class Exchange {
    
    /**
     * Finds the value of a currency in the CURRENCIES object.
     * @param currency - The currency to search for.
     * @returns The value of the currency multiplied by 2 if found, otherwise 0.
     */
    public static exchange(currency: string): number {
        const currencyEntries = Object.entries(CURRENCY_DATA);

        for(let i = 0; i < currencyEntries.length; i++) {
            if(currencyEntries[i][0] === currency) {
                return currencyEntries[i][1].value * 2
            }
        }

        return 0
    }
}
