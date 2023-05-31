import { createSelector } from '@reduxjs/toolkit';
export const selectorTickers = state => state.tickers
export const selectorTickersOld = state => state.tickers.tickersOld
export const selectorSearchSelector = state => state.tickers.searchSelector

export const filteredTickersSelector = createSelector(
    selectorTickers,
    selectorSearchSelector,
    (tickers, searchSelector) => {
        if (searchSelector === '') {
            return tickers.tickers;
        } else {
            return tickers.tickers.filter(item => item.ticker.toLowerCase().includes(searchSelector))
        }
    }
)