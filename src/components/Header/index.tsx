import React, { useContext, useState } from 'react';

import KanbanContext from '../../states';
import { BoardTitles, RootDispatchTypes } from '../../enums';

import './styles.css';
import * as AppConstants from '../../i18n/en-UK.json';

export const Header = () => {
  const { state, dispatch } = useContext(KanbanContext);

  const [title, setTitle] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() === '') {
      setTitle('');
      return;
    }

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
      <form className="form" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={title}
          className="form__element"
          placeholder={AppConstants.header.placeholder}
          onChange={handleChange}
        />
        <button
          className="form__button"
          type="submit"
          aria-label={AppConstants.header.addTodo}
        >
          +
        </button>
      </form>
    </header>
  );
};
