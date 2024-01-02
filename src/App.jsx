import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import components
import Today from './pages/Today';
import Settings from './pages/Settings';

//import functions 
import init from './config/functions/init.js';

export default function App() {
    useEffect(() => { init() }, []);
    return (
        <main className='App'>
            <BrowserRouter>
                <Routes>
                    <Route index path='today' element={<Today />} />
                    <Route path='settings' element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
