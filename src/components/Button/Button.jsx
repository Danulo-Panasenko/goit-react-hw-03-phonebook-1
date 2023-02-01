import PropTypes from 'prop-types';
import css from './Button.module.css';
const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={css.btn} type={type}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: 'submit',
};

Button.prototypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.element.isRequired,
};
