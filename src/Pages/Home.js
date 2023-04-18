import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import NavBar from '../Components/NavBar.js';
import BackToTop from '../Components/BackToTop.js';
import PHILOSOPHIESOFWAR from '../Components/PHILOSOPHIESOFWAR.js'
import ABILITIES from '../Components/ABILITIES.js';
import STRATAGEMS from '../Components/STRATAGEMS.js';
import INVOCATIONSOFTHEETHEREALS from '../Components/INVOCATIONSOFTHEETHEREALS.js'
import WARLORDTRAITS from '../Components/WARLORDTRAITS.js';
import AllDataSheets from '../Components/AllDataSheets.js';


export default function Home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <Header />
            <PHILOSOPHIESOFWAR/>
            <ABILITIES />
            <STRATAGEMS />
            <INVOCATIONSOFTHEETHEREALS />
            <WARLORDTRAITS />
            <AllDataSheets/>
            <NavBar />
            <BackToTop />
            <Footer />
        </div>
    );
}