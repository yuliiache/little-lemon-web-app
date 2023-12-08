
function TestimonialCard ({ starRating, avatar, review, name, starAlt}) {
    return (
        <section className='testimonials-card'>
            <div className='testimonials-rating'>
                <img
                    src={starRating}
                    alt={starAlt}
                />
            </div>
            <div className='testimonials-avatar-review'>
                    <img
                        src={avatar}
                        alt={`face of ${name}`}
                    />
                <p>{review}</p>
            </div>
            <p>{name}</p>
        </section>
    )
}

export default TestimonialCard;