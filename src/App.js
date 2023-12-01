import './App.css';
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
            <Home />
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
