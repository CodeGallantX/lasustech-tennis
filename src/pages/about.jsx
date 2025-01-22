import Header from '../components/Header';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <section className='py-20'>
                <Services />
                <Pricing />
                <Contact />
            </section>
            <Footer />

        </div>
    )
}

export default App;