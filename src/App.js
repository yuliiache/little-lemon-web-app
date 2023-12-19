import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookingForm from "./Pages/BookingForm";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import BookingConfirmation from "./Pages/Confirmation";
import './App.css';
import {useState} from "react";

function App() {
    const[availableTime, setAvailableTime] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ])

    const updateTime = () => {
        setAvailableTime()
    }

    return (


        <div className='container'>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/reservation" element={<BookingForm
                        availableTime={availableTime}
                        updateTimes={updateTime}
                    />}/>
                    <Route path="/confirmation" element={<BookingConfirmation/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
