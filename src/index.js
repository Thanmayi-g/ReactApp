/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootswatch/dist/slate/bootstrap.min.css';

// app.js (or index.js)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


/*
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/darkly/bootstrap.min.css'; // Choose your preferred theme
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
*/
// index.js

import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './index.css'; // Import the Bootswatch theme
import App from './App';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/


// With this line
createRoot(document.getElementById('root')).render(<App />);


reportWebVitals();

