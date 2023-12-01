import React from 'react';

// FC means Functional Component, generic type.
const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );  
}

export default Todos;