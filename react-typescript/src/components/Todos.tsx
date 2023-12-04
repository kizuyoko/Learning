import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';

// FC means Functional Component, generic type.
const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul>
      {props.items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );  
}

export default Todos;