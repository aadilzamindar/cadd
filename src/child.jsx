// Child.js
import React from 'react';
import GrandChild from './grandchild';

function Child() {
  return (
    <div style={{ padding: '10px', border: '1px solid green' }}>
      <h3>Child Component</h3>
      <GrandChild />
    </div>
  );
}

export default Child;
