import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

import AddNewTickers from "./AddNewTickers";

global.setImmediate = (callback, ...args) => {
    setTimeout(callback, 0, ...args);
};

jest.mock('react-redux');

const onChange = jest.fn();

describe('InputCustom', () => {
    it('should render InputCustom', () => {
        render(<AddNewTickers value='' onChange={onChange} />)
    })

    it('initial state of newTicker is an empty string', () => {
        render(<AddNewTickers value='' onChange={onChange} />);
        const newTickerInput = screen.getByPlaceholderText('Add Ticker Name');
        expect(newTickerInput.value).toBe('');
    })

    it('handleAddNewTickers is called when the button is clicked', () => {
        render(<AddNewTickers value='' onChange={onChange} />);
        const addButton = screen.getByRole('button');
        const handleAddNewTickersMock = jest.fn();
        addButton.addEventListener('click', handleAddNewTickersMock);
        fireEvent.click(addButton);
        expect(handleAddNewTickersMock).toHaveBeenCalled();
    })

    it('setNewTicker is called correctly when the input value changes', () => {
        render(<AddNewTickers value='' onChange={onChange} />);
        const newTickerInput = screen.getByPlaceholderText('Add Ticker Name');
        fireEvent.change(newTickerInput, { target: { value: 'AAPL' } });
        expect(newTickerInput.value).toBe('AAPL');
    });
})