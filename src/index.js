import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './context/ContextShare';
import TokenAuth from './context/TokenAuth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
<ContextShare>
<TokenAuth>
  <App/>
</TokenAuth>
</ContextShare>
</BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

