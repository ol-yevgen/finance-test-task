import { TickerContainer } from './TickerContainer/TickerContainer';

export const Tickers = ({ tickers, tickersOld }) => {
    
    const renderTickerList = (arr) => {
        return arr.map(({ticker, ...props}) => {
            return <TickerContainer
                key={ticker}
                ticker={ticker}
                {...props}
                tickersOld={tickersOld}
            />
        })
    }

    const ticketList = renderTickerList(tickers)

    return (
        <ul className='tickers'>
            {ticketList}
        </ul>
    )
}

