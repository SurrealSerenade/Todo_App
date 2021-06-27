import { useContext, useCallback, DragEvent } from 'react';

import KanbanContext from '../states';
import { RootDispatchTypes } from '../enums';
import { IDraggedItem } from '../interfaces';

export const useDraggable = () => {
  const { state, dispatch } = useContext(KanbanContext);

  const handleDragStart = (e: DragEvent, item: IDraggedItem) => {
    e.target.addEventListener('dragend', handleDragEnd);

    dispatch({
      type: RootDispatchTypes.StoreDraggedItem,
      payload: {
        draggedItem: item,
        draggedNode: e.target,
      },
    });

    setTimeout(() => {
      dispatch({
        type: RootDispatchTypes.DragStart,
      });
    }, 0);
  };

  const handleDragEnter = useCallback(
    (e: DragEvent, targetItem: IDraggedItem) => {
      if (state.draggedNode !== e.target) {
        let newList = [...state.boards];
        let itemIndex = targetItem.itemIndex;
        let currentGroup = newList[state.draggedItem!.boardIndex];
        let currentItems = currentGroup.items;
        let element = currentItems.splice(state.draggedItem!.itemIndex, 1)[0];
        newList[targetItem.boardIndex].items.splice(itemIndex, 0, element);

        dispatch({
          type: RootDispatchTypes.UpdateDraggedItem,
          payload: {
            draggedItem: targetItem,
          },
        });

        dispatch({
          type: RootDispatchTypes.DragEnter,
          payload: newList,
        });
      }
    },
    [state.draggedItem, state.draggedNode, dispatch, state.boards]
  );

  const handleDragEnd = useCallback(() => {
    dispatch({
      type: RootDispatchTypes.DragEnd,
    });

    dispatch({
      type: RootDispatchTypes.ClearDraggedItem,
    });
  }, [dispatch]);

  return { handleDragEnter, handleDragStart, handleDragEnd };
};
