import React, { useEffect } from 'react';
import { Routes, Route, useResolvedPath, useMatch, Link } from 'react-router-dom';

//import components
import Icon from './config/components/Icon.jsx';
import Today from './pages/Today';
import Settings from './pages/Settings';

//import functions 
import init from './config/functions/init.js';

export default function App() {
    useEffect(() => { init() }, []);

    return (
        <main className='App'>
            <div className='viewport'>
                <Routes>
                    <Route index path='today' element={<Today />} />
                    <Route path='settings' element={<Settings />} />
                </Routes>
            </div>
            <nav className='navbar'>
                <CustomLink icon={'local_fire_department'} to={'today'} />
                <CustomLink icon={'settings'} to={'settings'} />
            </nav>
        </main>
    );
}
function CustomLink({ to, icon }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Link className={isActive ? "navbar-active" : ""} to={to} >
            <Icon icon={icon} />
        </Link>
    );
}