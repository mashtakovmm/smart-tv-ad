import './App.css'
import AdVideo from './pages/AdVideo'
import PromoVideo from './pages/PromoVideo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AdVideo />} />
                    <Route path='promo/' element={<PromoVideo />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
