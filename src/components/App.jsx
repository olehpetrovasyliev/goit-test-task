import { getUsers } from 'services/api';
import Card from './Card/Card';

export const App = () => {
  const test = async () => console.log(await getUsers(6));
  test();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Card />
    </div>
  );
};
