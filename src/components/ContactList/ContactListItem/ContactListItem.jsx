import PropTypes from 'prop-types';

export const ContactListItem = ({ id, number, name, onClick }) => (     
  <>
      <span>{name}</span>
      <span>{number}</span>
      <button index={id} type="button" onClick={onClick}>
        Delete
      </button>
    </>  
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};