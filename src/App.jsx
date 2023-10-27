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
                        <Route path="/smart-tv-ad" element={<AdVideo />} />
                        <Route path='/smart-tv-ad/promo/' element={<PromoVideo />} />
                    </Routes>
                </Router>
            </AppWrapper>
        </>
    )
}

export default App
