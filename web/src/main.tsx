import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <VideoPlayer />
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
