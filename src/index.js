import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './components/Body';
import Browse from './components/Browse';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

