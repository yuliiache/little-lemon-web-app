import {useState} from "react";

function ChooseTable ({ chooseTable, handleTableChange }) {

    const[availableTime, setAvailableTime] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ])

    return (
        <div className='choose-table'>
            <h1>
                Choose your table
            </h1>
            <div>
                <label htmlFor='date'>Date</label>
                <input
                    type='date'
                    name='date'
                    id='date'
                    value={chooseTable.date}
                    onChange={handleTableChange}
                />
            </div>
            <div>
                <label htmlFor='time'>Time</label>
                <select
                    id='time'
                    name='time'
                    value={chooseTable.time}
                    onChange={handleTableChange}
                >
                    {availableTime.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor='guests'>Number of guests</label>
                <input
                    id='guests'
                    name='guests'
                    type='number'
                    min='1'
                    max='10'
                    value={chooseTable.guests}
                    onChange={handleTableChange}
                />
            </div>
            <div>
                <label htmlFor='occasion'>Occasions</label>
                <select
                    id='occasion'
                    name='occasion'
                    value={chooseTable.occasion}
                    onChange={handleTableChange}
                >
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ChooseTable;