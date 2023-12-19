import Button from "./Button";
// import { IoCalendarClearOutline } from "react-icons/io5";
// import { LuClock4 } from "react-icons/lu";
// import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";
// import { LiaGlassCheersSolid } from "react-icons/lia";


function ChooseTable ({ chooseTable, handleTableChange, handleLocationChange, errorDate, availableTime, updateTime }) {

    // const[isOpen, setIsOpen] = useState(false);

    return (
        <div className='choose-table'>
            <h1>
                Choose your table
            </h1>
            <label htmlFor='date'>Date</label>
            <div className='booking-date'>
                {/*<IoCalendarClearOutline />*/}
                <input
                    type='date'
                    name='date'
                    id='date'
                    value={chooseTable.date}
                    onChange={handleTableChange}
                />
                {errorDate && <p className='error-message'>{errorDate}</p>}
            </div>

            <label htmlFor='time'>Time</label>
            <div
                // onClick={() => setIsOpen(!isOpen)}
                >
                {/*<LuClock4 />*/}
                <select
                    id='time'
                    name='time'
                    value={chooseTable.time}
                    onChange={(e) => {
                        handleTableChange(e);
                        // setIsOpen(!isOpen)
                    }}
                >
                    {availableTime.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                {/*{isOpen ? <BiChevronUpCircle/> : <BiChevronDownCircle />}*/}
            </div>
            <label htmlFor='guests'>Number of guests</label>
            <div className='booking-guests'
                // onClick={() => setIsOpen(!isOpen)}
            >
                <select
                    id='guests'
                    name='guests'
                    value={chooseTable.guests}
                    onChange={(e) => {
                        handleTableChange(e);
                        // setIsOpen(!isOpen)
                    }}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>

                </select>
                {/*{isOpen ? <BiChevronUpCircle/> : <BiChevronDownCircle />}*/}
            </div>
            <label htmlFor='occasion'>Occasions</label>
            <div
                // onClick={() => setIsOpen(!isOpen)}
            >
                {/*<LiaGlassCheersSolid />*/}
                <select
                    id='occasion'
                    name='occasion'
                    value={chooseTable.occasion}
                    onChange={(e) => {
                        handleTableChange(e);
                        // setIsOpen(!isOpen)
                    }}
                >
                    <option>Occasion</option>
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                </select>
                {/*{isOpen ? <BiChevronUpCircle/> : <BiChevronDownCircle />}*/}
            </div>
            <div className='booking-location'>
                <label htmlFor='location'>Where</label>
                <Button
                    className='choose-table'
                    name='location'
                    id='location'
                    value={chooseTable.selectedLocation}
                    onClick={() => handleLocationChange('selectedLocation', 'inside')}
                    active={chooseTable.selectedLocation === 'inside'}
                >
                    Inside
                </Button>
                <Button
                    className='choose-table'
                    name='location'
                    value={chooseTable.selectedLocation}
                    onClick={() => handleLocationChange('selectedLocation', 'outside')}
                    active={chooseTable.selectedLocation === 'outside'}
                >
                    Outside
                </Button>
            </div>
        </div>
    )
}

export default ChooseTable;