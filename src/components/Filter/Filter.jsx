import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => (
  <>
    <p>Find contact by name</p>
    <input type="text" name="filter" onChange={onChange} />
  </>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};