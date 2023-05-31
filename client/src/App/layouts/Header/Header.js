import { useDispatch, useSelector } from 'react-redux';
import  {InputCustom} from '../../../components/UI/InputCustom/InputCustom';
import './header.scss';
import { memo, useCallback } from 'react';
import { setSearch } from '../../../redux/features/slices/tickersSlice';

const Header = () => {
    const searchSelector = useSelector(state => state.tickers.searchSelector);
    const dispatch = useDispatch()

    const onUpdateSearch = useCallback((e) => {
        e.preventDefault();
        dispatch(setSearch((e.target.value).toLowerCase()));
    }, [dispatch])
    
   return(
       <header className='header'>
           <div className="header__content">
               <div className="header__logo">Tickers</div>
               <InputCustom
                   type="text"
                   placeholder={"Share search"}
                   value={searchSelector}
                   func={onUpdateSearch}
                   className={''}
               />
           </div>
       </header>
   )
}

export  default memo(Header)
