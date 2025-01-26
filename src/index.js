import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChatPreviewContextProvider } from './components/context/ChatPreviewContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatPreviewContextProvider>
      <App />
    </ChatPreviewContextProvider>
    
  </React.StrictMode>
);