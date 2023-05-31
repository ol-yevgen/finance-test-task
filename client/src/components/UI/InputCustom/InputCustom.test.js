import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

import userEvent from "@testing-library/user-event"

import { InputCustom } from "./InputCustom";

jest.mock('react-redux');
const onChange = jest.fn();


describe('InputCustom', () => {
    it('should render InputCustom', () => {
        render(<InputCustom type='' placeholder='' className='' />)
    })

    it('should render without placeholder', () => {
        render(<InputCustom />)

        expect(screen.getByPlaceholderText(/Input text/i)).toBeInTheDocument()
    })

    it('should render with correct placeholder', () => {
        render(<InputCustom placeholder="text" />)

        expect(screen.getByPlaceholderText(/text/i)).toBeInTheDocument()
    })

    it('input value is correctly displayed', () => {
        render(<InputCustom value="Hello" func={onChange}/>);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement.value).toBe('Hello');
    });

    it('onChange function is called when input value changes', () => {
        render(<InputCustom func={onChange} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });
        expect(onChange).toHaveBeenCalled();
    });
})