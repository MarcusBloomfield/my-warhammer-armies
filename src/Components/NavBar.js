import { scroller as scrollToElements } from 'react-scroll'


export default function NavBar() {
    return (
        <div className="navBar">
            <button className="navButton" onClick={() => scrollToElements.scrollTo('PHILOSOPHIESOFWAR', options())}> PHILOSOPHIES OF WAR </button>
            <button className="navButton" onClick={() => scrollToElements.scrollTo('ABILITIES', options())} > ABILITIES </button>
            <button className="navButton" onClick={() => scrollToElements.scrollTo('STRATAGEMS', options())}> STRATAGEMS </button>
            <button className="navButton" onClick={() => scrollToElements.scrollTo('INVOCATIONSOFTHEETHEREALS', options())} > INVOCATIONS OF THE ETHEREALS </button>
            <button className="navButton" onClick={() => scrollToElements.scrollTo('WARLORDTRAITS', options())} > WARLORD TRAITS </button>
            <button className="navButton" onClick={() => scrollToElements.scrollTo('ALLDATASHEETS', options())}> DATA SHEETS </button>
        </div>
    );
}
function options() {
    return {
        duration: 1500,
        delay: 100,
        offset: -200,
        smooth: true,
    }
}