import { Suspense, lazy } from 'react';

import { Spinner } from "../components/Spinner/Spinner"
import Header from '../App/layouts/Header/Header';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));

export const App = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <div className="wrapper">
                <Header />
                <MainPage />
            </div>
        </Suspense>
    );
}