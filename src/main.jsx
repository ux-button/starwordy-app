import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { GroupsListPage } from './features/groups-list/containers/groups-list-page/GroupsListPage';
import { ComponentsLibrary } from './layouts/ComponentsLibrary';
import { WordsListPage } from './features/words-list/containers/WordsListPage';
import { FlipcardsPage } from './features/flipcards/containers/FlipcardsPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GroupsListPage />
  </React.StrictMode>,
);
