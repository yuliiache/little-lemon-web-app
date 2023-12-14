

function PersonalDetails({ personalDetails, handlePersonalChange }) {
    return (

        <div className='personal-details'>
            <h1>
                Personal details
            </h1>
            <div className='personal-name'>
                <label htmlFor='name'>Full name</label>
                <p>*Required</p>
            </div>
            <div>
                <input
                id='name'
                type='text'
                placeholder='Name'
                name='name'
                autoComplete='name'
                value={personalDetails.name}
                onChange={handlePersonalChange}
            />
            </div>
            <div className='personal-email'>
                <label htmlFor='email'>Email</label>
                <p>*Required</p>
            </div>
            <div>
                <input
                    id='email'
                    type='email'
                    placeholder='Email'
                    name='email'
                    autoComplete='email'
                    value={personalDetails.email}
                    onChange={handlePersonalChange}
                />
            </div>
            <div className='personal-phone'>
                <label htmlFor='phone'>Contact Number</label>
                <p>*Required</p>
            </div>
            <div>
                <input
                    id='phone'
                    type='tel'
                    placeholder='Contact Number'
                    name='phone'
                    autoComplete='tel'
                    value={personalDetails.phone}
                    onChange={handlePersonalChange}
                />
            </div>
            <label htmlFor='comment'>Comment</label>
            <div className='personal-comment'>
                <textarea
                    id='comment'
                    placeholder='Anything else about your booking?'
                    name='comment'
                    rows='10'
                    maxLength='200'
                    value={personalDetails.comment}
                    onChange={handlePersonalChange}
                />
                <p>0/200 Characters</p>
            </div>
            <div className='terms'>
                <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                    checked={personalDetails.terms}
                    onChange={handlePersonalChange}
                />
                <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>
        </div>
    )
}

export default PersonalDetails;