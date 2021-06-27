import { Reducer, useReducer } from 'react';

import Kanban from './Kanban';
import { IAppAction } from './actions';
import { rootReducer } from './reducers/rootReducer';
import { useStorageData } from './hooks/useStorageData';
import { IAppState, initialState, KanbanContextProvider } from './states';

import './App.css';
import * as AppConstants from './i18n/en-UK.json';

function App() {
  const [state, dispatch] = useReducer<
    Reducer<IAppState<string>, IAppAction<string>>
  >(rootReducer, initialState);
  useStorageData(AppConstants.storageName, dispatch);

  return (
    <div className="App">
      <header className="App-header">
        <KanbanContextProvider value={{ state, dispatch }}>
          <Kanban />
        </KanbanContextProvider>
      </header>
    </div>
  );
}

export default App;
