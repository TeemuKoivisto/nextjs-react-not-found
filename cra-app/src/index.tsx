import React from 'react'
import ReactDOM from 'react-dom'

import { Component } from 'local-module'

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Component />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
