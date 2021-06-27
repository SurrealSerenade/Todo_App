import { DragEvent, ReactNode, useContext } from 'react';

import KanbanContext from '../../states';
import { RootDispatchTypes } from '../../enums';
import { useDraggable } from '../../hooks/useDraggable';

import './styles.css';

interface IProps {
  children: ReactNode | ReactNode[];
  boardIndex: number;
  itemIndex: number;
}

export const Card = ({ children, boardIndex, itemIndex }: IProps) => {
  const { handleDragStart, handleDragEnter } = useDraggable();
  const { state, dispatch } = useContext(KanbanContext);

  const onDragStart =
    (boardIndex: number, itemIndex: number) =>
    (e: DragEvent<HTMLDivElement>) => {
      return handleDragStart(e, { boardIndex, itemIndex });
    };

  const onDragItemEnter =
    (boardIndex: number, itemIndex: number) =>
    (e: DragEvent<HTMLDivElement>) => {
      return state.isDragging
        ? handleDragEnter(e, { boardIndex, itemIndex })
        : undefined;
    };

  const handleClick = (boardIndex: number, itemIndex: number) => () => {
    const list = [...state.boards];

    list[boardIndex].items.splice(itemIndex, 1);

    dispatch({
      type: RootDispatchTypes.UpdateBoards,
      payload: list,
    });
  };

  const getStyles = (item: any) => {
    if (
      state.isDragging &&
      state.draggedItem!.boardIndex === item.boardIndex &&
      state.draggedItem!.itemIndex === item.itemIndex
    ) {
      return 'active';
    }
    return '';
  };

  return (
    <div
      draggable
      onDragStart={onDragStart(boardIndex, itemIndex)}
      onDragEnter={onDragItemEnter(boardIndex, itemIndex)}
      className={`card ${getStyles({ boardIndex, itemIndex })}`}
    >
      <span
        className="card__action"
        onClick={handleClick(boardIndex, itemIndex)}
      >
        🗑️
      </span>
      {children}
    </div>
  );
};
