import React, { useState } from 'react';

import { IItem } from '../types/todo';

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

type OnlyTitle = Pick<IItem, 'title'>

const AddTodo: React.FC<IProps> = (props) => {

  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});
  
  function titleHandler (e: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({
      title: e.target.value,
    });
  }

  function submitHandler(e: any) {
    
    e.preventDefault();
    const form = e.currentTarget;     

    if (!todo.title) {
      return;
    }

      props.onAddTodo(todo as IItem);
      
    const reset = () => {
      form.elements[0].value = '';
    }
    reset();
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" onChange={titleHandler} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
}

export default AddTodo;