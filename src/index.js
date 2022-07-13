import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'
import '../node_modules/normalize.css'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
