import React from 'react';
import {Link, NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import Home from './homePage/Home.jsx';
import NewPost from './newPostPage/NewPost.jsx';
import Overview from "./overviewPage/Overview.jsx";
import PostDetail from "./postDetailPage/PostDetail.jsx";
import logoMedium from './assets/logo-medium.png';
import './App.css';
import NotFound from "./notFoundPage/NotFound.jsx";

function App () {
    const navigate= useNavigate();

    return (
        <>
        <nav className="main-navigation outer-content-container">
            <div className="inner-nav-container">
                <button type="button" className="main-navigation-logo-button" onClick={() => navigate('/')}>
                    <img src={logoMedium} alt="Logo that links to home page"/>
                </button>
                <ul className="main-navigation-links">
                   <li>
                       <NavLink className={({ isActive}) => isActive ? "active-link" : "default-link"} to="/">Home</NavLink>
                   </li>
                    <li>
                        <NavLink className={({ isActive}) => isActive ? "active-link" : "defualt-link"} to="/new">Nieuwe post maken</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/new" element={<NewPost/>} />
                <Route path="/posts" element={<Overview/>}/>
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </main>
            <footer className="footer-navigation outer-content-container">
                Blogventure &copy; 2023 - ontwikkeld voor NOVI Hogeshool
            </footer>
        </>
    )
}

export default App
