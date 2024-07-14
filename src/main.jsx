import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { GroupScreen } from './layouts/GroupScreen';
import { WordsInGroupScreen } from './layouts/WordsInGroupScreen';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GroupScreen />
  </React.StrictMode>,
);
