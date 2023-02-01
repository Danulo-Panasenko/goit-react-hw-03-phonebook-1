import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
const ContactList = ({ removeContact, contacts }) => {
  const Contact = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}:{number}
      <Button onClick={() => removeContact(id)} type="button">
        Delete
      </Button>
    </li>
  ));
  return <ul>{Contact}</ul>;
};
export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
