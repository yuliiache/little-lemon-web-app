import {useState} from "react";
import PersonalDetails from "../Components/PersonalDetailsForm"
import ChooseTable from "../Components/ChooseTableForm";

function Reservation() {
    const [chooseTable, setChooseTable] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
        selectedLocation: null,
    })
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
        terms: false,
    })

    const handlePersonalChange = (e) => {
        if (e.target.type === 'checkbox') {
            setPersonalDetails({
                ...personalDetails,
                [e.target.name]: e.target.checked,
            });
        } else {
            setPersonalDetails({
                ...personalDetails,
                [e.target.name]: e.target.value,
            });
        }
    }

    const handleTableChange = (e) => {
        setChooseTable( prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(chooseTable.occasion)

        setChooseTable({
            date: '',
            time: '',
            guests: 1,
            occasion: '',
            selectedLocation: null,
        });
        setPersonalDetails({
            name: '',
            email: '',
            phone: '',
            comment: '',
            terms: false,
        });
    };

    return (
        <main className="main">
            <form onSubmit={handleSubmit}>
                <ChooseTable
                    chooseTable={chooseTable} handleTableChange={handleTableChange}
                />
                <PersonalDetails personalDetails={personalDetails} handlePersonalChange={handlePersonalChange}/>
                <button disabled={!personalDetails.name} type='submit'>Submit</button>

            </form>
        </main>
    )
}
export default Reservation;