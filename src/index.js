import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/normalize.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<h1 style={{'marginTop':'250px', 'marginLeft':'30vw', 'fontSize':'25rem'}}>Loading...</h1>}>
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
