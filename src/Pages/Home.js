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
import Element from "react-scroll/modules/components/Element";

//Todo
//Complete inserting all needed data
//Process Text
//Do Desktop Css
//Make pretty

export default function Home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <Header />
            <NavBar />
            <Element name="PHILOSOPHIESOFWAR"><PHILOSOPHIESOFWAR /></Element>
            <Element name="ABILITIES"> <ABILITIES /></Element>
            <Element name="STRATAGEMS"> <STRATAGEMS /></Element>
            <Element name="INVOCATIONSOFTHEETHEREALS"> <INVOCATIONSOFTHEETHEREALS /></Element>
            <Element name="WARLORDTRAITS"> <WARLORDTRAITS /></Element>
            <Element name="ALLDATASHEETS"> <AllDataSheets /></Element>
            <Element name="BackToTop"><BackToTop /></Element>
            <Element name="Footer"> <Footer /></Element>
        </div>
    );
}