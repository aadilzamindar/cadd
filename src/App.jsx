// App.js
import  { useState } from 'react';
import UserContext from './userContext';
import Parent from './parent';

function App() {
  const [user, setUser] = useState('Aadil');

  return (
 <>
 <h1>Hello Aadil</h1>
    <UserContext.Provider value={user}>
      <div style={{ padding: '20px', border: '1px solid gray' }}>
        <h1>useContext Example </h1>
        <Parent />
      </div>
    </UserContext.Provider>
 </>
  );
}

export default App;
