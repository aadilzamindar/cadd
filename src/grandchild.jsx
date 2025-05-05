// GrandChild.js
import { useContext } from 'react';
import UserContext from './userContext';

function GrandChild() {
    const user = useContext(UserContext);

    return (
        <div style={{ padding: '10px', border: '1px solid red' }}>
            <h4>GrandChild Component</h4>
            <p>User Name: <strong>{user}</strong></p>
        </div>
    );
}

export default GrandChild;
