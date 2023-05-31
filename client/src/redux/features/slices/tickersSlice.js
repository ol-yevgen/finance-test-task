import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickers: [],
    tickersOld: [],
    searchSelector: '',
}

const tickersSlice = createSlice({
    name: 'tickers',
    initialState,
    reducers: {
        tickersFetched: (state, action) => {
            state.tickers = action.payload
        },
        setTickersOld: (state) => {
            state.tickersOld = state.tickers
        },
        setSearch: (state, action) => { 
            state.searchSelector = action.payload
        },

    }
})

const { actions, reducer } = tickersSlice;

export default reducer;
export const {
    tickersFetched,
    setTickersOld,
    setSearch,
} = actions;