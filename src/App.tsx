import React from 'react';
import './App.css';
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import {Routes, Route} from 'react-router-dom'
import TranslationPage from "./components/TranslationPage/TranslationPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<TranslationPage/>}/>
                <Route path='/favorite' element={<FavoritesPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
