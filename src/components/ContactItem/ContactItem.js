import { useDispatch } from "react-redux"
import { BtnDelete, ContactLi, ContactName } from "./ContactItem.styled"
import { deleteContact } from "redux/operations";

export const ContactItem = ({ contact: {name, number, id}}) => {
    const dispatch = useDispatch();

    return (
        <ContactLi>
            <ContactName>
                <span>{name}:</span>
                <span>{number}</span>
            </ContactName>
            <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>Delete</BtnDelete>
        </ContactLi>
    )
}