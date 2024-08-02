import Herosection from "./Herosection";
import Menu from "./Menu";
import Testimonials from "./Testimonals";
import About from "./About";
import React from 'react';

function Homepage({ availableTimes, setAvailableTimes }) {
    // const [availableTimes, setAvailableTimes] = useState([
    //     '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
    // ]);
    // useEffect(() => {
    //     console.log(availableTimes);
    // }, [availableTimes]);

    return (
        <main>
            <section id="herosection" >
                <Herosection />
            </section>
            <section id="menu">
                <Menu />
            </section>
            <article id="testimonals">
                <Testimonials />
            </article>
            <section id="about">
                <About />
            </section>
            {/* <section id="booking">
                <BookingForm
                    availableTimes={availableTimes}
                    setAvailableTimes={setAvailableTimes} />
            </section> */}


        </main>
    )
}
export default Homepage