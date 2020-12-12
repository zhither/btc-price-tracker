import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

function App() {
  return (
    <Main/>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

