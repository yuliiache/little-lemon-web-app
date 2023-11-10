import iconDelivery from './assets/images/icon-delivery.png'
function SpecialsCard({ image, title, price, description}) {
    return(
        <section>
            <img
                style={{ width: 200 }}
                src={image}
                alt={title}
            />
            <h3>{title}</h3>
            <p className='price'>{price}</p>
            <p className='description'>{description}</p>
            <div>
                <p>Order a delivery</p>
                <img src={iconDelivery} alt='delivery vespa icon'/>
            </div>
        </section>
    )
}

export default SpecialsCard;