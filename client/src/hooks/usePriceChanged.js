import arrowUp from '../App/assets/up-arrow.svg';
import arrowDown from '../App/assets/arrow-down.svg';

export const usePriceChanged = (tickersOld, newTickerName, newTickerPrice) => {

    const priceChanged = () => {
        const oldPrices = [];
        tickersOld.forEach(element => {
            if (element.ticker === newTickerName) {
                oldPrices.push(element.price)
            }
        })

        const isPriceChaged = () => {
            if (+oldPrices[0] <= +newTickerPrice) {
                return true
            } else {
                return false
            }
        }

        const priceUpOrDownClass = isPriceChaged() ? 'ticker__rise' : 'ticker__fall'
        const priceUpOrDownArrow = isPriceChaged() ? arrowUp : arrowDown
        return { priceUpOrDownClass, priceUpOrDownArrow }
    }

    return priceChanged()
}
