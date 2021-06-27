import React, { useEffect } from 'react';
import { IAppAction } from '../actions';
import { RootDispatchTypes } from '../enums';

export const useStorageData = <T,>(
  storeName: string,
  dispatch: React.Dispatch<IAppAction<T>>
) => {
  useEffect(() => {
    if (localStorage.getItem(storeName)) {
      dispatch({
        type: RootDispatchTypes.UpdateBoards,
        payload: JSON.parse(localStorage.getItem(storeName)!),
      });
    }
  }, [dispatch, storeName]);
};
