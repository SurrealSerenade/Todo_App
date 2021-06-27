import { useContext } from 'react';
import { DragEvent } from 'react';
import { useDraggable } from '../../hooks/useDraggable';
import { IBoard } from '../../interfaces';
import KanbanContext from '../../states';
import { Card } from '../Card';

import './styles.css';

interface IProps {
  board: IBoard<string>;
  boardIndex: number;
}

export const Board = ({ board, boardIndex }: IProps) => {
  const { handleDragEnter } = useDraggable();
  const { state } = useContext(KanbanContext);

  const onDragEnter =
    (board: IBoard<string>, boardIndex: number) =>
    (e: DragEvent<HTMLDivElement>) => {
      return state.isDragging && !board.items.length
        ? handleDragEnter(e, { boardIndex, itemIndex: 0 })
        : undefined;
    };

  return (
    <div
      key={board.title}
      className="board"
      onDragEnter={onDragEnter(board, boardIndex)}
    >
      <h2 className="board__title">{board.title}</h2>
      {board.items.map((item: string, itemIndex: number) => (
        <Card key={itemIndex} boardIndex={boardIndex} itemIndex={itemIndex}>
          {item}
        </Card>
      ))}
    </div>
  );
};
