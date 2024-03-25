import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import Browse from './components/Browse';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }
]);

root.render(
  <React.StrictMode>
  <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);

