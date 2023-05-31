import { useCallback, useState } from 'react';

import {Ticker} from './Ticker/Ticker';
import { TickerFullInfo } from './TickerFullInfo/TickerFullInfo';

export const TickerContainer = ({ ...props }) => {
    const [isFullInfo, setIsFullInfo] = useState(false)

    const isFullInfoChange = useCallback(() => setIsFullInfo(!isFullInfo), [isFullInfo]);

    return (
        <li className='ticker'
            onClick={isFullInfoChange}
        >
            {isFullInfo
                ? <TickerFullInfo
                    {...props} />
                : <Ticker
                    {...props} />
            }

        </li>
    )
}