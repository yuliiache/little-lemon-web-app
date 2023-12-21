import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BookingForm from "./Pages/BookingForm";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import BookingConfirmation from "./Pages/Confirmation";
import './App.css';
import {useReducer} from "react";

export const initializeTime = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTime = ( times, action ) => {
    switch (action.type) {
        case 'reserved': {
            return times.filter((t) => {
                let actionTimeStr = typeof action.time === 'number' ? action.time.toString() : action.time;

                return t !== actionTimeStr
            })
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
};

function App() {

    const [availableTime, dispatch] = useReducer(updateTime, initializeTime());


    return (


        <div className='container'>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/reservation" element={<BookingForm
                        availableTime={availableTime}
                        dispatch={dispatch}
                    />}/>
                    <Route path="/confirmation" element={<BookingConfirmation/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}


export default App;
