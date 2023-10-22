import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { Provider } from "react-redux"
import { store } from './redux';
import HomePage from './HomePage';


function App() {
  const [count, setCount] = useState(0)
  //const count = useSelector((state) => state.counter.count)

  return (
    <div className='App'>
       <Provider store={store}>
                <HomePage />
            </Provider>
      </div>
  )
}

export default App
