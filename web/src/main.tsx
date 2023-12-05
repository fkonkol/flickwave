import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import VideoPlayer from './components/VideoPlayer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "video/:uuid",
    element: <VideoPlayer />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
