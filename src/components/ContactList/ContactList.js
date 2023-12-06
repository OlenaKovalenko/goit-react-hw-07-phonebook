import { ContactItem } from "components/ContactItem/ContactItem";
import {  useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));

    return (
        <ul>
            {visibleContacts.map(contact => (
                <ContactItem key={contact.id} contact={ contact} />
            ))} 
        </ul>
    )
};