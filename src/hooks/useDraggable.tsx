import { useContext, useCallback, DragEvent } from 'react';

import KanbanContext from '../states';
import { RootDispatchTypes } from '../enums';
import { IDraggedItem } from '../interfaces';

export const useDraggable = () => {
  const { state, dispatch } = useContext(KanbanContext);

  const handleDragStart = (e: DragEvent, item: IDraggedItem) => {
    e.target.addEventListener('dragend', handleDragEnd);

    setTimeout(() => {
      dispatch({
        type: RootDispatchTypes.DragStart,
        payload: {
          draggedItem: item,
        },
      });
    }, 0);
  };

  const handleDragEnter = useCallback(
    (targetItem: IDraggedItem) => {
      if (!state.draggedItem) return;
      let list = [...state.boards];
      let { boardIndex, itemIndex } = targetItem;
      let currentBoard = list[state.draggedItem.boardIndex];
      let boardItems = currentBoard.items;
      let item = boardItems.splice(state.draggedItem.itemIndex, 1)[0];
      list[boardIndex].items.splice(itemIndex, 0, item);

      dispatch({
        type: RootDispatchTypes.UpdateStore,
        payload: {
          boards: list,
          draggedItem: targetItem,
        },
      });
    },
    [state.draggedItem, dispatch, state.boards]
  );

  const handleDragEnd = useCallback(() => {
    dispatch({
      type: RootDispatchTypes.DragEnd,
    });
  }, [dispatch]);

  return { handleDragEnter, handleDragStart, handleDragEnd };
};
