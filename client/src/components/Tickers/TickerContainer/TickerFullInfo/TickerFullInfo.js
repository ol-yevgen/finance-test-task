import { usePriceChanged } from '../../../../hooks/usePriceChanged';

import { DeleteButton } from '../../../UI/DeleteButton/DeleteButton'

export const TickerFullInfo = ({ ...props }) => {

    const { ticker, exchange, price, change, change_percent, dividend, last_trade_time, tickersOld } = props;
    const lastTimeTrade = last_trade_time.slice(0, -5).replace('T', ' ');

    // Visual effects to highlight positive or negative changes in the prices
    const priceUpDown = usePriceChanged(tickersOld, ticker, price)

    return (
        <div className='ticker__full'>
            <div className="ticker__full-title">
                <span className="ticker__full-name">{ticker}</span>
                <span className='ticker__full-exchange ticker__exchange'>{exchange}</span>
            </div>
            <div className="ticker__full-time">{lastTimeTrade}</div>
            <div className="ticker__full-middle">
                <span className="ticker__full-change">{change} $</span>
                <span className="ticker__full-dividend">{dividend}</span>
                <span className="ticker__full-yield">{props.yield}</span>
            </div>
            <div className="ticker__full-bottom">
                <span className='ticker__full-percent'>{change_percent} %</span>
                <div className="ticker__full-price">
                    <div className={`percent__container ${priceUpDown.priceUpOrDownClass}`}>
                        <img src={priceUpDown.priceUpOrDownArrow} width='15px' height='15px' alt="arrow" />
                        <span className="">{price} $</span>
                    </div>
                </div>
                <DeleteButton ticker={ticker} />
            </div>
        </div>
    )
}