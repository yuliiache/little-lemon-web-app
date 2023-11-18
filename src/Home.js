import hero from './assets/images/hero.jpg'
import { specials} from "./data/SpecialsData";
import {testimonials} from "./data/TestimonialsData";
import SpecialsCard from "./SpecialsCard";
import TestimonialCard from "./TestimonialCard";
import owners from "./assets/images/owners-about.jpg"
import decoLine from "./assets/images/deco-line-about.png"
import restaurantInside from "./assets/images/restaurant-inside.jpg"


function Home() {
    const specialItems = specials.map(special =>
        <SpecialsCard key={special.id} {...special} />
    );

    const testimonialItems = testimonials.map(testimonial =>
        <TestimonialCard key={testimonial.id} {...testimonial}/>
    );
    return(
        <main className='homepage'>
            <section className='hero'>
                <div className='hero-content'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <button>Reserve a table</button>
                </div>
                <div className='hero-image'>
                    <img
                         src={hero}
                         alt='assortment of bruschettas on a plate held by a waiter'/>
                </div>
            </section>
            <section className='specials'>
                <h1>Specials</h1>
                <button>Online Menu</button>
                {specialItems}
            </section>
            <section className='testimonials'>
                <h1>Testimonials</h1>
                {testimonialItems}
            </section>
            <section className='about'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.

                    The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.

                    The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                <img src={decoLine}/>
                <div>
                    <img className='owners'
                         src={owners}
                         alt='restaurant owners Mario and Adrian'
                    />
                    <img className='kitchen'
                         src={restaurantInside}
                         alt='restaurant interior'
                    />
                </div>
            </section>
        </main>
    )
}
export default Home;