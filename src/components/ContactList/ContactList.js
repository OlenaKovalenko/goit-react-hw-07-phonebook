import { ContactItem } from "components/ContactItem/ContactItem";
import {  useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));

    return (
        <ul>
            {visibleContacts.map(contact => (
                <ContactItem key={contact.id} contact={ contact} />
            ))} 
        </ul>
    )
};