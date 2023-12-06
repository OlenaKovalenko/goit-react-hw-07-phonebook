import { GlobalStyle } from 'styles';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { AppContainer, ContactsTitle, MainTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

    return (
    <AppContainer>
      <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        
        {contacts.length > 0 ? (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactList />
          </>
        ) : null}  

      <GlobalStyle />
    </AppContainer>
    );

}



