export enum BoardTitles {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Complete = 'Complete',
}

export enum RootDispatchTypes {
  AddTodo = 'Add_Todo',
  DragStart = 'DRAG_START',
  DragEnter = 'DRAG_ENTER',
  DragEnd = 'DRAG_END',
  UpdateBoards = 'UPDATE_BOARDS',
  StoreDraggedItem = 'STORE_DRAGGED_ITEM',
  UpdateDraggedItem = 'UPDATE_DRAGGED_ITEM',
  ClearDraggedItem = 'CLEAR_DRAGGED_ITEM',
}
