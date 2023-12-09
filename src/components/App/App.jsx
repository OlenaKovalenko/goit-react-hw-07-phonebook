import { GlobalStyle } from 'styles';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { AppContainer, ContactsTitle, MainTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  

    return (
    <AppContainer>
      <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
        {/* {contacts.length > 0 ? (
          <> */}
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactList />
          {/* </> */}
        ) : null}  

      <GlobalStyle />
    </AppContainer>
    );

}



