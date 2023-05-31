import '@testing-library/jest-dom'
import { type } from 'ramda';

import { filteredTickersSelector } from './selectors'

const ticker = [{
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "price": 279.29,
    "change": 64.52,
    "change_percent": 0.84,
    "dividend": 0.56,
    "yield": 1.34,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
}]

describe('Redux selectors', () => {

    it('should return array from createSelector', () => {
        const mockParameters = {
            tickers: ticker,
            searchSelect: '',
        };
        const selected = filteredTickersSelector.resultFunc(mockParameters);
        expect(type(selected)).toEqual('Array');
    });
})
