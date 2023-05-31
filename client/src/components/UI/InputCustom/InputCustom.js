import searchIcon from '../../../App/assets/searchIcon.svg';

export const InputCustom = ({ type, value, func, placeholder = 'Input text', className }) => {

   return(
       <div className={`input ${className}`}>
           <div className='input__image'>
               <img src={searchIcon} alt="search" />
           </div>
           <input
               type={type}
               value={value}
               placeholder={placeholder}
               onChange={func}
           />
       </div>
   )
}