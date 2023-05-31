import { useResize } from '../../../../hooks/useResize';
import { usePriceChanged } from '../../../../hooks/usePriceChanged';
import { DeleteButton } from '../../../UI/DeleteButton/DeleteButton'

export const Ticker = ({ ...props }) => {
    const { ticker, exchange, price, change, change_percent, tickersOld } = props;
    
    // Visual effects to highlight positive or negative changes in the prices
    const priceUpDown = usePriceChanged(tickersOld, ticker, price)
    const windowSize = useResize();

    return (
        <>
            <div className="ticker__title">
                <span className='ticker__exchange'>{exchange}</span>
                <span className="ticker__name">{ticker}</span>
            </div>
            {windowSize.isScreenMd ? <span className='ticker__percent ticker__item'>{change_percent} %</span> : null}
            <span className="ticker__change ticker__item">{`${change} ${windowSize.isScreenSm ? '$' : ''}`}</span>
            <div className="ticker__price ticker__item">
                <div className={` percent__container ${priceUpDown.priceUpOrDownClass}`}>
                    <img src={priceUpDown.priceUpOrDownArrow} width='15px' height='15px' alt="arrow" />
                    <span className="">{`${price} ${windowSize.isScreenSm ? '$' : ''}`}</span>
                </div>
            </div>
            <DeleteButton ticker={ticker}/>
        </>
    )
}