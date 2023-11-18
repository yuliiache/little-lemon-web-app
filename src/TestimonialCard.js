
function TestimonialCard ({ starRating, avatar, review, name, starAlt}) {
    return (
        <section>
            <div>
                <img
                    src={starRating}
                    alt={starAlt}
                />
            </div>
            <div>
                <img
                    src={avatar}
                    alt={`face of ${name}`}
                />
            </div>
            <p>{review}</p>
            <h6>{name}</h6>
        </section>
    )
}

export default TestimonialCard;