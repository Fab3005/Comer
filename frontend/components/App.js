import React from 'react';
import './CSS/App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';

const App = () => {
    return(
        <div className="App">
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/frontpage' element={<Main />} />
        </Routes>
        </div>
    )
}

export default App;