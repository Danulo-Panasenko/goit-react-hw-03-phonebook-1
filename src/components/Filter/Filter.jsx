import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleChange }) => {
  return (
    <div>
      <label className={css.label}>Find contacts by name</label>
      <input name="filter" onChange={handleChange} className={css.input} />
    </div>
  );
};
export default Filter;
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
