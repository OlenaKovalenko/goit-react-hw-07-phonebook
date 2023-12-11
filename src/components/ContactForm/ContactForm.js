import { Formik} from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { BtnAddContact, ErrorMsg, FormLabel, StyledField, StyledForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts} from 'redux/selectors';
import { addContact } from 'redux/operations';

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(30, 'Too long name')
    .required('Name is required!'),
    number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, {
        message: 'Invalid Phone Number! Use the format 050-123-4567.',
        excludeEmptyString: false,
    })
    .required('Phone number is required!')
    .max(12, 'Invalid phone number!'),
});


export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    return (
    <Formik
        initialValues={{
            name: '',
            number: '',
        }}
        
        validationSchema={validationSchema}
        
        onSubmit={(values, actions) => {
            const isExist = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());

            if (isExist) {
                actions.resetForm();
                toast.error(`${values.name} is alredy in contacts.`);
                return;
            } 
            dispatch(addContact(values));
            actions.resetForm();
        }}
        >
        <StyledForm>
            <FormLabel htmlFor="name">Name</FormLabel>
            <StyledField type="text" name="name" id="name" autoComplete="on" placeholder="John Smith" />
            <ErrorMsg name="name" component="div" />

            <FormLabel htmlFor="number">Number</FormLabel>
            <StyledField type="tel" name="number" id="number" autoComplete="on" placeholder="XXX-XXX-XXXX" />
            <ErrorMsg name="number" component="div" />

            <BtnAddContact type="submit">Add contact</BtnAddContact>
        </StyledForm>
    </Formik>
)
} 
    
    
