import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import * as reduxHooks from 'react-redux';

import MainPage from "./MainPage";

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

global.setImmediate = (callback, ...args) => {
    setTimeout(callback, 0, ...args);
};

describe('MainPage', () => {
    it('renders MainPage without crashing', async () => {
        await waitFor(() => {
            jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(ticker)
        })

        render(<MainPage />)
    })
})
