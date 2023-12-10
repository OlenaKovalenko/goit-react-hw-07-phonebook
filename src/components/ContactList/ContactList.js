import { ContactItem } from "components/ContactItem/ContactItem";
import {  useSelector } from "react-redux";
import { selectContacts} from "redux/selectors";

export const ContactList = () => {
    // const visibleContacts = useSelector(selectVisibleContacts);
    // console.log(visibleContacts);
    const contacts = useSelector(selectContacts);


    return (
        <ul>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))} 
        </ul>
    )
};