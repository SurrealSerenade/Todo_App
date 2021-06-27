import React, { useContext, useState } from 'react';

import KanbanContext from '../../states';
import { BoardTitles, RootDispatchTypes } from '../../enums';

export const Header = () => {
  const { state, dispatch } = useContext(KanbanContext);

  const [title, setTitle] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleClick = () => {
    if (title.trim() === '') return;

    let list = [...state.boards];
    list = list.map((value, index) => {
      if (value.title === BoardTitles.ToDo) {
        value.items.push(title);
      }
      return value;
    });

    setTitle('');

    dispatch({
      type: RootDispatchTypes.AddTodo,
      payload: list,
    });
  };
  return (
    <header>
      <form className="form">
        <input
          required
          type="text"
          value={title}
          className="form__element"
          onChange={handleChange}
        />
        <button className="fomr__button" type="button" onClick={handleClick}>
          +
        </button>
      </form>
    </header>
  );
};
