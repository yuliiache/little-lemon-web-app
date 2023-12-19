import {useState} from "react";
import PersonalDetails from "../Components/PersonalDetailsForm"
import ChooseTable from "../Components/ChooseTableForm";
import Button from "../Components/Button";

function BookingForm({ availableTime, updateTime}) {
    const [chooseTable, setChooseTable] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
        selectedLocation: '',
    });

    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
        terms: false,
    });

    const [error, setError] = useState({
        name: null,
        email: null,
        date: null,
    });

    const isValidEmail = (email) => {
        const emailRegex = /.+@.+\..+/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
        const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
        return phoneRegex.test(phone);
    }

    const dateChecker = (date) => {
        let currentDate = new Date();
        let inputDateObj = new Date(date);

        return inputDateObj >= currentDate;
    }

    const handlePersonalChange = (e) => {
        if (e.target.id === "email") {
            if (!isValidEmail(e.target.value)) {
                setError({
                    ...error,
                    [e.target.id]: 'Email is invalid',
                });
            } else {
                setError({
                    ...error,
                    [e.target.id]: null,
                });
            }
        }

        if (e.target.id === "name") {
            if (e.target.value.length < 3) {
                setError({
                    ...error,
                    [e.target.id]: 'Name is too short',
                });
            } else {
                setError({
                    ...error,
                    [e.target.id]: null,
                });
            }
        }

        if (e.target.id === "phone") {
            if (!isValidPhone(e.target.value)) {
                setError({
                    ...error,
                    [e.target.id]: 'Phone is invalid',
                });
            } else {
                setError({
                    ...error,
                    [e.target.id]: null,
                });
            }
        }

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
        if (e.target.id === 'date') {
            if (!dateChecker(e.target.value)) {
                setError({
                    ...error,
                    [e.target.id]: 'The date is in the past. Please choose another date',
                });
            } else {
                setError({
                    ...error,
                    [e.target.id]: null,
                });
            }
        }

        setChooseTable( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        errorDate={error.date}
                        availableTime={availableTime}
                        updateTime={updateTime}
                    />
                </div>
                <div className='form-bottom'>
                    <PersonalDetails
                        personalDetails={personalDetails}
                        handlePersonalChange={handlePersonalChange}
                        errorName={error.name}
                        errorEmail={error.email}
                        errorPhone={error.phone}
                    />
                    <div className='submit-button'>
                        <Button
                            disabled={
                                !personalDetails.name ||
                                !personalDetails.email ||
                                !personalDetails.phone ||
                                error.name !== null ||
                                error.email !== null ||
                                error.phone !== null ||
                                error.date !== null
                        }
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
export default BookingForm;