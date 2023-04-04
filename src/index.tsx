import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

import './index.css';

import App from './App';
import { ViewMode } from './pages/VewMode';
import { Setting } from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ViewMode />,
  },
  {
    path: 'settings',
    element: <Setting />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
