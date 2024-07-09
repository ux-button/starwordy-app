import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ComponentLibrary } from './ComponentsLibrary'
import { GroupScreen } from './GroupScreen'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ComponentLibrary /> */}
    <GroupScreen />
  </React.StrictMode>,
)
