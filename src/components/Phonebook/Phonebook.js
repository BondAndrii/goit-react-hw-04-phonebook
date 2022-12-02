import React from "react";
import PropTypes from "prop-types";
import "./Phonebook.css"

const PhoneBook = ({ contacts, onDelete }) => (
    <ul className="Phonebook">
        {contacts.map((contact) => <li className="Phonebook__element" key={contact.id} id={contact.id}>
            <p className="Text">{contact.name}: {contact.number}</p>
            <button className="Button__element" type="button" onClick={()=> onDelete(contact.id)}>Видали!</button>
        </li>
        )}
    </ul>
);

export default PhoneBook;

PhoneBook.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }))
}