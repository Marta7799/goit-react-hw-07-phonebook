import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectFilteredContacts } from '../../redux/selectors';
import { ContactListItem } from './ContactListItem';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wraperContactList}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={css.contactList}>
          {contacts.map((contact, id) => (
            <ContactListItem key={id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
};
