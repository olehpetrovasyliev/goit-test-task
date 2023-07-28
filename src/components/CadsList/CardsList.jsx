import Card from 'components/Card/Card';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'services/redux/selectors';

const CardsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  return (
    <ul>
      {contacts.map(el => (
        <Card user={el} />
      ))}
    </ul>
  );
};

export default CardsList;
