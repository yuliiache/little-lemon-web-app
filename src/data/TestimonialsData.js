import fiveStar from "../assets/images/icon-5star-rating.png";
import fourHalfStar from "../assets/images/icon-4-5star-rating.png"
import avatar1 from "../assets/images/avatar1-testimonial.jpg";
import avatar2 from "../assets/images/avatar2-testimonial.jpg";
import avatar3 from "../assets/images/avatar3-testimonial.jpg";
import avatar4 from "../assets/images/avatar4-testimonial.jpg";

export const testimonials = [{
    id: 0,
    starRating: fiveStar,
    avatar: avatar1,
    review:'"The food at this  restaurant is out of this world!”',
    name:'Janice Bitsy',
    starAlt:'five star rating',
}, {
    id: 1,
    starRating: fiveStar,
    avatar: avatar2,
    review:'"Absolutely love the ambiance and the service here.”',
    name:'Mark Jakobs',
    starAlt:'five star rating',
}, {
    id: 2,
    starRating: fourHalfStar,
    avatar: avatar3,
    review:'"This place has a unique charm that makes you feel right at home.”',
    name:'Katie Lang',
    starAlt:'four and a half star rating',
}, {
    id: 3,
    starRating: fiveStar,
    avatar: avatar4,
    review:'“Highly recommend!A must-visit for any food lover in Chicago."',
    name:'Andy Sanders',
    starAlt:'five star rating',
}]