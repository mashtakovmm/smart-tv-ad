import { useEffect } from 'react';
import './App.css'
import AdVideo from './pages/AdVideo'
import PromoVideo from './pages/PromoVideo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWrapper from './utils/AppWrapper';


function App() {
    return (
        <>
            <AppWrapper>
                <Router>
                    <Routes>
                        <Route path="/" element={<AdVideo />} />
                        <Route path='promo/' element={<PromoVideo />} />
                    </Routes>
                </Router>
            </AppWrapper>
        </>
    )
}

export default App
