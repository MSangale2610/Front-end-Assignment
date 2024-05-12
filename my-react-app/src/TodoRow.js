import React from 'react';
import Checkbox from './Checkbox';
import Button from './Component/Button';

function TodoRow({ todo, onDelete, onToggleComplete }) {
  return (
    <li className="flex items-center space-x-4">
      <Checkbox
        checked={todo.completed}
        onChange={onToggleComplete}
        label={todo.text}
      />
      <Button
        variant="small"
        onClick={onDelete}
        className="invisible group-hover:visible"
      >
        Delete
      </Button>
    </li>
  );
}

export default TodoRow;