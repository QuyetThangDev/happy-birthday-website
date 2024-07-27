import { HeroSection, Services, TopDestination, BookingSteps, Testimonials, Partners, NewsLetter, Footer } from '../containers';

const HomePage = () => {
    return (
        <>
            <div id="hero-section">
                <HeroSection />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="top-destination">
                <TopDestination />
            </div>
            {/* <div id="booking-steps">
                <BookingSteps />
            </div> */}
            {/* <div id="testimonials">
                <Testimonials />
            </div> */}
            {/* <div id="partners">
                <Partners />
            </div> */}
            {/* <div id="newsletter">
                <NewsLetter />
            </div> */}
            <div id="footer">
                <Footer/>
            </div>
        </>
    );
}

export default HomePage;
