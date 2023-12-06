

function PersonalDetails({ personalDetails, handleChange }) {
    return (

        <div className='personal-details'>
            <h1>
                Personal details
            </h1>
            <div>
                <label htmlFor='name'>Full name</label>
                <input
                    id='name'
                    type='text'
                    placeholder='Name'
                    name='name'
                    autoComplete='name'
                    value={personalDetails.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    placeholder='Email'
                    name='email'
                    autoComplete='email'
                    value={personalDetails.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='phone'>Contact Number</label>
                <input
                    id='phone'
                    type='tel'
                    placeholder='Contact Number'
                    name='phone'
                    autoComplete='tel'
                    value={personalDetails.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='comment'>Comment</label>
                <input
                    id='comment'
                    type='text'
                    placeholder='Anything else about your booking?'
                    name='comment'
                    maxLength='200'
                    value={personalDetails.comment}
                    onChange={handleChange}
                />
                <p>0/200 Characters</p>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={personalDetails.terms}
                    onChange={handleChange}
                />
                <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>
            <div>

            </div>
        </div>
    )
}

export default PersonalDetails;