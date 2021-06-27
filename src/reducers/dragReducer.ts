import { IAppState } from '../states';
import { RootDispatchTypes } from '../enums';
import { IRootAction } from '../actions/root.actions';

import * as AppConstants from '../i18n/en-UK.json';

export const dragReducer = <T>(state: IAppState<T>, action: IRootAction<T>) => {
  switch (action.type) {
    case RootDispatchTypes.AddTodo:
    case RootDispatchTypes.UpdateBoards:
    case RootDispatchTypes.DragEnter:
      localStorage.setItem(
        AppConstants.storageName,
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        boards: action.payload,
      };

    case RootDispatchTypes.DragStart:
      return {
        ...state,
        isDragging: true,
      };

    case RootDispatchTypes.DragEnd:
      return {
        ...state,
        isDragging: false,
      };

    case RootDispatchTypes.StoreDraggedItem:
      return {
        ...state,
        draggedItem: action.payload.draggedItem,
        draggedNode: action.payload.draggedNode,
      };

    case RootDispatchTypes.UpdateDraggedItem:
      return {
        ...state,
        draggedItem: action.payload.draggedItem,
      };

    case RootDispatchTypes.ClearDraggedItem:
      return {
        ...state,
        draggedItem: undefined,
        draggedNode: undefined,
      };
  }
};
