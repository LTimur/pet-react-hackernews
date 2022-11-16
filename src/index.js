import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AppRouter} from './Router/AppRouter';

// import {App} from './Components/App/App';
// import { Provider } from 'react-redux'
// import { configureStore } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// const renderApp = () => {
//   const inititalState = {}
//   const store = configureStore(inititalState)

//   store.dispatch({ type: '@hnClone/@@INIT' })
  
//   root.render(
//     <React.StrictMode>
//       <AppRouter />
//     </React.StrictMode>
//   );
// }