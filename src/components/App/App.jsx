import { GlobalStyle } from 'styles';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { AppContainer, ContactsTitle, MainTitle } from './App.styled';
import { useSelector } from 'react-redux';
import {selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

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



