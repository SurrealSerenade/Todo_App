import { BoardTitles } from '../enums';

export interface IBoard<T> {
  title: BoardTitles;
  items: T[];
}

export interface IDraggedItem {
  boardIndex: number;
  itemIndex: number;
}
