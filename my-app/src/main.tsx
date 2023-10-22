import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


//importing the provider from react-redux  
import { store } from './store';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
