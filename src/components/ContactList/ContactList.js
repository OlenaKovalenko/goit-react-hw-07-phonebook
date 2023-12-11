import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { selectVisibleContacts} from "redux/selectors";

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <ul>
            {visibleContacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))} 
        </ul>
    )
};