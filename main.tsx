import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./src/app/router/router";
import './normalize.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
)
