import {useState} from "react";


function Reservation() {
    const [name, setName] = useState('')
    const [date, setDate] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        console.log('Submitted');
    };

    return (
        <main className="main">
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date"/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <div>
                    <label htmlFor='name'>FULL NAME</label>
                    <input
                        id='name'
                        type='text'
                        placeholder='Name'
                        name='name'
                        autoComplete='name'
                        value={name}
                        onChange={e=> setName(e.target.value)}
                    />
                </div>
                <button disabled={!name} type='submit'>Submit</button>
            </form>
        </main>
    )
}
export default Reservation;