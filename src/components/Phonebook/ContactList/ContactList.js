import React from "react";
import PropTypes from "prop-types";
import "./ContactList.css"

const ContactList = ({ contacts, onDelete }) => (
    <ul className="ContactList">
        {contacts.map((contact) => <li className="ContactList__element" key={contact.id} id={contact.id}>
            <p className="Text">{contact.name}: {contact.number}</p>
            <button className="Button__element" type="button" onClick={()=> onDelete(contact.id)}>Видали!</button>
        </li>
        )}
    </ul>
);

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }))
}