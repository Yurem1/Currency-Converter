import CURRENCIES from '../utility/currency.json'

export default class Exchange {
    static findCurrency() {
        return JSON.stringify(CURRENCIES);
    }

    static exchange() {
        return 0;
    }
}
