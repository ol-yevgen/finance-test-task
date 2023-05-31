import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DeleteButton } from './DeleteButton';

global.setImmediate = (callback, ...args) => {
    setTimeout(callback, 0, ...args);
};

describe('Delete button', () => {
    it('renders DeleteButton without crashing', () => {
        render(<DeleteButton ticker="AAPL" />);
    });

    it('handleDeleteTicker is called when the button is clicked', () => {
        const handleDeleteTickerMock = jest.fn();
        render(<DeleteButton DeleteButton ticker="AAPL" onClick={handleDeleteTickerMock} />);
        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);
        expect(handleDeleteTickerMock).toHaveBeenCalledTimes(0);
    });
})

