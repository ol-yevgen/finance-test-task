import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { socket } from '../../lib/socket';
import { selectorTickersOld, filteredTickersSelector } from '../../redux/features/selectors';
import { tickersFetched, setTickersOld } from '../../redux/features/slices/tickersSlice'

import { Spinner } from "../../components/Spinner/Spinner";
import { Tickers } from "../../components/Tickers/Tickers";
import  AddNewTickers from "../../components/AddNewTickers/AddNewTickers";

const MainPage = () => {
    const tickersOld = useSelector(selectorTickersOld)
    const dispatch = useDispatch()

    const filteredTickers = useSelector(filteredTickersSelector);

    useEffect(() => {
        socket.on('ticker', (data) => {
            dispatch(setTickersOld());
            dispatch(tickersFetched(data));
        })
    }, [dispatch]);

    return (
        <main className="main">
            <div className="main__search">
                <AddNewTickers />
            </div>
            <Suspense fallback={<Spinner />}>
                <Tickers
                    tickers={filteredTickers}
                    tickersOld={tickersOld}
                />
            </Suspense>
        </main>
    )
}

export default MainPage;