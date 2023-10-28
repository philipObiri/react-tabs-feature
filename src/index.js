import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
import './react.css';

import HowReactWorks from './HowReactWorks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HowReactWorks/>
  </React.StrictMode>
);

