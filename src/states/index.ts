import React, { ReactNode } from 'react';
import { BoardTitles } from '../enums';
import { IAppAction } from '../actions';
import { IBoard, IDraggedItem } from '../interfaces';

export interface IAppState<T> {
  boards: IBoard<T>[];
  isDragging: boolean;
  draggedItem?: IDraggedItem;
  draggedNode?: ReactNode;
}

export const initialState: IAppState<string> = {
  boards: [
    {
      title: BoardTitles.ToDo,
      items: ['Create styles', 'Hello World', 'TEst 1, 3,4'],
    },
    { title: BoardTitles.InProgress, items: [] },
    { title: BoardTitles.Complete, items: [] },
  ],
  isDragging: false,
};

const KanbanContext = React.createContext<{
  state: IAppState<string>;
  dispatch: React.Dispatch<IAppAction<string>>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const KanbanContextProvider = KanbanContext.Provider;
export const KanbanContextConsumer = KanbanContext.Consumer;
export default KanbanContext;
