import iconDelivery from './assets/images/icon-delivery.png'
function SpecialsCard({ image, title, price, description}) {
    return (
        <section className='specials-card'>
            <div className='specials-image'>
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className='specials-content'>
                <h3>{title}</h3>
                <p className='price'>{price}</p>
                <p className='description'>{description}</p>
                <div className='specials-delivery'>
                    <p>Order a delivery</p>
                    <img src={iconDelivery} alt='delivery vespa icon'/>
                </div>
            </div>
        </section>
    )
}

export default SpecialsCard;