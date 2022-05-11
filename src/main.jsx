import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CardMovie from './components/CardMovie'
import './index.css'
import MoviesList from './pages/MoviesList'
import App from './routes/App'
import User from './routes/User'

ReactDOM.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/MoviesList" element={<MoviesList/>} />
        <Route path="/CardMovie" element={<CardMovie/>} />
        <Route path="/User" element={<User/>} />
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </Routes> 
    </BrowserRouter>,
  document.getElementById('root')
)
