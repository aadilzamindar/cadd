// Parent.js
import React from 'react';
import Child from './child';

function Parent() {
  return (
    <div style={{ padding: '10px', border: '1px solid blue' }}>
      <h2>Parent Component</h2>
      <Child />
    </div>
  );
}

export default Parent;
