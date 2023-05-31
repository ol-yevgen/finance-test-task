import { render } from "@testing-library/react";
import * as reduxHooks from 'react-redux';

import { Tickers } from "./Tickers";

global.setImmediate = (callback, ...args) => {
    setTimeout(callback, 0, ...args);
};

jest.mock('react-redux');

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

describe('Tickers', () => {
    it('should render Tickers list', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(ticker)

        render(
            <Tickers tickers={ticker} tickersOld={ticker} />
        )
    })
})