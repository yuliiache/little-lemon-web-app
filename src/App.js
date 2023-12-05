import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Reservation from "./Pages/Reservation";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import BookingConfirmation from "./Pages/Confirmation";
import './App.css';

function App() {
    return (
        <div className='container'>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/reservation" element={<Reservation/>}/>
                    <Route path="/confirmation" element={<BookingConfirmation/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
