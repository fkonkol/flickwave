import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import VideoPlayer from './components/VideoPlayer';

export default function App() {
  return (
    <VideoPlayer />
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
