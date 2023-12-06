import {useState} from "react";
import PersonalDetails from "../Components/PersonalDetailsForm"
import ChooseTable from "../Components/ChooseTableForm";

function Reservation() {
    const [chooseTable, setChooseTable] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    })
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
        terms: false,
    })

    const handleTableChange = (e) => {
        setChooseTable( {
            ...chooseTable,
            [e.target.id]: e.target.value,
        });
    }

    const handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            setPersonalDetails({
                ...personalDetails,
                [e.target.name]: e.target.checked,
            });
        } else {
            setPersonalDetails({
                ...personalDetails,
                [e.target.id]: e.target.value,
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(personalDetails.name);

        setChooseTable({
            date: '',
            time: '',
            guests: '',
            occasion: '',
        });
        setPersonalDetails({
            name: '',
            email: '',
            phone: '',
            comment: '',
        });
    };

    return (
        <main className="main">
            <form onSubmit={handleSubmit}>
                <ChooseTable chooseTable={chooseTable} handleTableChange={handleTableChange}/>
                <PersonalDetails personalDetails={personalDetails} handleChange={handleChange}/>
                <button disabled={!personalDetails.name} type='submit'>Submit</button>

            </form>
        </main>
    )
}
export default Reservation;