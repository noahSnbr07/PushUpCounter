/* eslint-disable react/prop-types */
import { Routes, Route, useResolvedPath, useMatch, Link, useNavigate } from 'react-router-dom';

//import components
import Icon from './config/components/Icon.jsx';
import Today from './pages/Today';
import Settings from './pages/Settings';
import { useEffect } from 'react';

export default function App() {
    const navigate = useNavigate();

    useEffect(() => { navigate('today'); }, []);

    return (
        <main className='App'>
            <div className='viewport'>
                <Routes>
                    {/* <Route index element={<Today />} /> */}
                    <Route path='today' element={<Today />} />
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