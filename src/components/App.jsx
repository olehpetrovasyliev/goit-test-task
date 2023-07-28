import { getUsers } from 'services/api';

export const App = () => {
  // const test = async () => console.log(await getUsers(4));
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
    </div>
  );
};
