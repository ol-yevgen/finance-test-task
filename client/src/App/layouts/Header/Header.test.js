import { render } from "@testing-library/react";
import * as reduxHooks from 'react-redux';

import Header from "./Header";
import {InputCustom} from "../../../components/UI/InputCustom/InputCustom";

jest.mock('react-redux');


describe('Header', () => {
    it('should render Header', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('')

        render(<Header />)
        render(<InputCustom />)
    })
})