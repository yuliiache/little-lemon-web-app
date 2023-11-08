import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
            <Home />
            <Footer />
        </>
    );
}

export default App;
