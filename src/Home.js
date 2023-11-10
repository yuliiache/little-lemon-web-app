import hero from './assets/images/hero.jpg'
import { specials} from "./data/SpecialsData";
import SpecialsCard from "./SpecialsCard";
function Home() {
    const specialItems = specials.map(special =>
        <li><SpecialsCard key={special.id} {...special} /></li>
    );

    return(
        <main className='homepage'>
            <section className='hero'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button>Reserve a table</button>
                <div>
                    <img className='hero-image'
                         style={{ width: 200 }}
                         src={hero}
                         alt='assortment of bruschettas on a plate held by a waiter'/>
                </div>
            </section>
            <section className='highlights'>
                <h1>Specials</h1>
                <button>Online Menu</button>
                {specialItems}
            </section>

        </main>
    )
}
export default Home;