import React from 'react';
import ReactDOM from 'react-dom/client';
import Video from './Video';
import './assets/css/App.css';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const sampleVideo = {
  id: '1',
  title: 'React Tutorial',
  description: 'Learn React step by step',
  url: 'https://example.com/video1',
  thumbnailUrl: 'https://via.placeholder.com/200x120'
}; 

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Video  video={sampleVideo} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
