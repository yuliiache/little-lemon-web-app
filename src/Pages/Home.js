import hero from '../assets/images/hero.jpg'
import { specials} from "../Data/SpecialsData";
import {testimonials} from "../Data/TestimonialsData";
import SpecialsCard from "../Components/SpecialsCard";
import TestimonialCard from "../Components/TestimonialCard";
import owners from "../assets/images/owners-about.jpg"
import decoLine from "../assets/images/deco-line-about.png"
import restaurantInside from "../assets/images/restaurant-inside.jpg"
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function Home() {
    const [isLargeDevice, setIsLargeDevice] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeDevice(window.innerWidth >= 980);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const specialItems = specials.map(special =>
        <SwiperSlide key={special.id}>
            <SpecialsCard {...special} />
        </SwiperSlide>
    );

    const testimonialItems = testimonials.map(testimonial =>
        <SwiperSlide key={testimonial.id}>
            <TestimonialCard {...testimonial} />
        </SwiperSlide>
    );
    return(
        <main className='main'>
            <div className='hero'>
                <div className='hero-background'></div>
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
            </div>
            <section className='specials'>
                <div className='specials-header'>
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </div>
                <div className='specials-holder'>
                    {isLargeDevice ? (
                        specialItems
                    ) : (
                        <Swiper
                            initialSlide={1}
                            slidesPerView={'auto'}
                            centeredSlides={true}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination ]}
                            className="mySwiper"
                        >
                            {specialItems}
                        </Swiper>
                    )}
                </div>
            </section>
            <section className='testimonials'>
                <h1>Testimonials</h1>
                <div className='testimonials-holder'>
                    {isLargeDevice ? (
                        testimonialItems
                    ) : (
                        <Swiper
                            initialSlide={1}
                            slidesPerView={'auto'}
                            spaceBetween={10}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {testimonialItems}
                            {testimonialItems}
                        </Swiper>
                    )}
                </div>
            </section>
            <section className='about'>
                <div className='about-content'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.<br />
                        <br/>
                        The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.<br />
                        <br/>
                        The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                    <img
                        src={decoLine}
                        alt='decorative yellow line'
                    />
                </div>
                <div className='about-images'>
                    <div className='about-images-top'>
                        <img
                            src={owners}
                            alt='restaurant owners Mario and Adrian'
                        />
                    </div>
                    <div className='about-images-bottom'>
                        <img
                            src={restaurantInside}
                            alt='restaurant interior'
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home;