import {useState} from "react";
import Button from "./Button";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";
import { LiaGlassCheersSolid } from "react-icons/lia";


function ChooseTable ({ chooseTable, handleTableChange, handleLocationChange }) {

    const[availableTime, setAvailableTime] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ])
    const[isOpen, setIsOpen] = useState(false);

    return (
        <div className='choose-table'>
            <h1>
                Choose your table
            </h1>
            <div>
                <label htmlFor='date'>Date</label>
                <IoCalendarClearOutline />
                <input
                    type='date'
                    name='date'
                    id='date'
                    value={chooseTable.date}
                    onChange={handleTableChange}
                />
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
                <label htmlFor='time'>Time</label>
                <LuClock4 />
                <select
                    id='time'
                    name='time'
                    value={chooseTable.time}
                    onChange={(e) => {
                        handleTableChange(e);
                        setIsOpen(!isOpen)
                    }}
                >
                    {availableTime.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                {isOpen ? <BiChevronUpCircle/> : <BiChevronDownCircle />}
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
                <label htmlFor='guests'>Number of guests</label>
                <select
                    id='guests'
                    name='guests'
                    value={chooseTable.guests}
                    onChange={(e) => {
                        handleTableChange(e);
                        setIsOpen(!isOpen)
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
                {isOpen ? <BiChevronUpCircle/> : <BiChevronDownCircle />}
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
                <label htmlFor='occasion'>Occasions</label>
                <LiaGlassCheersSolid />
                <select
                    id='occasion'
                    name='occasion'
                    value={chooseTable.occasion}
                    onChange={(e) => {
                        handleTableChange(e);
                        setIsOpen(!isOpen)
                    }}
                >
                    <option>Occasion</option>
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                </select>
                {isOpen ? <BiChevronUpCircle/> : <BiChevronDownCircle />}
            </div>
            <div>
                <h2>Where</h2>
                <Button
                    className='choose-table'
                    name='location'
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