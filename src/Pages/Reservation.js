import {useState} from "react";
import PersonalDetails from "../Components/PersonalDetailsForm"
import ChooseTable from "../Components/ChooseTableForm";
import Button from "../Components/Button";

function Reservation() {
    const [chooseTable, setChooseTable] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
        selectedLocation: '',
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

    const handleLocationChange = (property, value) => {
        setChooseTable(prevState => ({
            ...prevState,
            [property]: value
        }))
    }

    const handleTableChange = (e) => {
        setChooseTable( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(chooseTable.selectedLocation)

        setChooseTable({
            date: '',
            time: '',
            guests: 1,
            occasion: '',
            selectedLocation: '',
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
        <main className='main'>
            <form onSubmit={handleSubmit}>
                <div className='form-background-top'></div>
                <div className='form-top'>
                    <ChooseTable
                        chooseTable={chooseTable}
                        handleTableChange={handleTableChange}
                        handleLocationChange={handleLocationChange}
                    />
                </div>
                <div className='form-bottom'>
                    <PersonalDetails
                        personalDetails={personalDetails}
                        handlePersonalChange={handlePersonalChange}/>
                    <div className='submit-button'>
                        <Button
                            disabled={!personalDetails.name || !personalDetails.email || !personalDetails.phone}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </div>
                </div>
                <div className='form-background-bottom'></div>
            </form>
        </main>
    )
}
export default Reservation;