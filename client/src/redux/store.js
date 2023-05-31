import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tickers from './features/slices/tickersSlice';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
    tickers: tickers
})

export const setupStore = (preloadedState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}