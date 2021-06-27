import { RootDispatchTypes } from '../enums';
import { IBoard, IDraggedItem } from '../interfaces';

export interface IAddTodo<T> {
  type: typeof RootDispatchTypes.AddTodo;
  payload: IBoard<T>[];
}

export interface IUpdateBoards<T> {
  type: typeof RootDispatchTypes.UpdateBoards;
  payload: IBoard<T>[];
}

export interface IDragStart {
  type: typeof RootDispatchTypes.DragStart;
  payload: {
    draggedItem: IDraggedItem;
  };
}

export interface IUpdateStore<T> {
  type: typeof RootDispatchTypes.UpdateStore;
  payload: {
    boards: IBoard<T>[];
    draggedItem: IDraggedItem;
  };
}

export interface IDragEnd {
  type: typeof RootDispatchTypes.DragEnd;
}

export type IRootAction<T> =
  | IAddTodo<T>
  | IUpdateBoards<T>
  | IDragStart
  | IUpdateStore<T>
  | IDragEnd;
