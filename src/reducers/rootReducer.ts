import { IAppState } from '../states';
import { RootDispatchTypes } from '../enums';
import { IRootAction } from '../actions/root.actions';

import * as AppConstants from '../i18n/en-UK.json';

export const rootReducer = <T>(state: IAppState<T>, action: IRootAction<T>) => {
  switch (action.type) {
    case RootDispatchTypes.AddTodo:
    case RootDispatchTypes.UpdateBoards:
      localStorage.setItem(
        AppConstants.storageName,
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        boards: action.payload,
      };

    case RootDispatchTypes.UpdateStore:
      localStorage.setItem(
        AppConstants.storageName,
        JSON.stringify(action.payload.boards)
      );
      return {
        ...state,
        boards: action.payload.boards,
        draggedItem: action.payload.draggedItem,
      };

    case RootDispatchTypes.DragStart:
      return {
        ...state,
        isDragging: true,
        draggedItem: action.payload.draggedItem,
      };

    case RootDispatchTypes.DragEnd:
      return {
        ...state,
        isDragging: false,
        draggedItem: undefined,
      };
  }
};
