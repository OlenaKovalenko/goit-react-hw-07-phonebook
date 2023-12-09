import { ContactItem } from "components/ContactItem/ContactItem";
import {  useSelector } from "react-redux";
import { selectContacts, selectVisibleContacts } from "redux/selectors";

export const ContactList = () => {
    // const visibleContacts = useSelector(selectVisibleContacts);
    const contacts = useSelector(selectContacts);


    return (
        <ul>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={ contact} />
            ))} 
        </ul>
    )
};