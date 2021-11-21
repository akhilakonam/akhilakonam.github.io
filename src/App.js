import React from "react";
import history from './history';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './LandingPage/LandingPage';

axios.defaults.withCredentials = true;

export default function App(props) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
            <Routes>
              <Route path='/' element={<LandingPage/>} />
            </Routes>
        </BrowserRouter>
    );
}