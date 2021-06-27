import React, { useContext, useState } from 'react';

import KanbanContext from '../states';
import { IBoard } from '../interfaces';
import { Board } from '../components/Board';
import { BoardTitles, RootDispatchTypes } from '../enums';

import './styles.css';

const Kanban = () => {
  const { state, dispatch } = useContext(KanbanContext);

  const [title, setTitle] = useState('');

  if (!state.boards) return null;

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
    <div>
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
      <div className="kanban">
        {state.boards.map((board: IBoard<string>, boardIndex: number) => {
          return (
            <Board key={boardIndex} board={board} boardIndex={boardIndex} />
          );
        })}
      </div>
    </div>
  );
};

export default Kanban;
