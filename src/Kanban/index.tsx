import { useContext } from 'react';

import KanbanContext from '../states';
import { IBoard } from '../interfaces';
import { Board, Header } from '../components';

import './styles.css';

const Kanban = () => {
  const { state } = useContext(KanbanContext);

  if (!state.boards) return null;

  return (
    <div>
      <Header />
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
