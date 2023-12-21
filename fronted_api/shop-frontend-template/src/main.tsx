import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import store from './store';
import { AddPost } from './components/addPost.tsx';
import { FullPost } from './components/fullPost.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/addPost' element={<AddPost />} />
          <Route/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
