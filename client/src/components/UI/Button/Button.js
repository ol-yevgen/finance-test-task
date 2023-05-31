import './button.scss';

export const Button = ({ text, func, style, submit, className}) => {
   return(
       <button
           className={className}
           type={submit}
           onClick={func}
           style={style}
       >
           {text}
       </button>
   )
}