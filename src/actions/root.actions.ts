import { ReactNode } from 'react';
import { RootDispatchTypes } from '../enums';
import { IBoard, IDraggedItem } from '../interfaces';

export interface IAddTodo<T> {
  type: typeof RootDispatchTypes.AddTodo;
  payload: IBoard<T>[];
}

export interface IUpdateStore<T> {
  type: typeof RootDispatchTypes.UpdateBoards;
  payload: IBoard<T>[];
}

export interface IDragStart {
  type: typeof RootDispatchTypes.DragStart;
}

export interface IDragEnter<T> {
  type: typeof RootDispatchTypes.DragEnter;
  payload: IBoard<T>[];
}

export interface IDragEnd {
  type: typeof RootDispatchTypes.DragEnd;
}

export interface IStoreDraggedItem {
  type: typeof RootDispatchTypes.StoreDraggedItem;
  payload: {
    draggedItem: IDraggedItem;
    draggedNode: ReactNode;
  };
}

export interface IUpdateDraggedItem {
  type: typeof RootDispatchTypes.UpdateDraggedItem;
  payload: {
    draggedItem: IDraggedItem;
  };
}

export interface IClearDraggedItem {
  type: typeof RootDispatchTypes.ClearDraggedItem;
}

export type IRootAction<T> =
  | IAddTodo<T>
  | IUpdateStore<T>
  | IDragStart
  | IDragEnter<T>
  | IDragEnd
  | IStoreDraggedItem
  | IUpdateDraggedItem
  | IClearDraggedItem;
