import { useCallback } from 'react';
import { socket } from '../../../lib/socket'
import { trashBinIcon } from '../../../App/assets/trash'

import './deleteButton.scss';

export const DeleteButton = ({ ticker }) => {
    
    const handleDeleteTicker = useCallback((e) => {
        e.stopPropagation()
        socket.emit('deleteTicker', ticker);
    }, [ticker])

    return (
        <button
            className='delete__button'
            onClick={handleDeleteTicker}
        >
            {trashBinIcon}
        </button>
    )
}