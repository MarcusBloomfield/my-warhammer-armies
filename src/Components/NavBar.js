import { scroller as scrollToElements } from 'react-scroll'
import { animateScroll } from 'react-scroll/modules';


export default function NavBar() {
    return (
        <div className="navBar">
            <button className="navButton" onClick={() => scrollToElements.scrollTo('projects', options())}> PHILOSOPHIES OF WAR </button>
            <button className="navButton" onClick={() => animateScroll.scrollToBottom(options())} > ABILITIES </button>
            <button className="navButton" onClick={() => animateScroll.scrollToBottom(options())} > STRATAGEMS </button>
            <button className="navButton" onClick={() => animateScroll.scrollToBottom(options())} > INVOCATIONS OF THE ETHEREALS </button>
            <button className="navButton" onClick={() => animateScroll.scrollToBottom(options())} > WARLORD TRAITS </button>
            <button className="navButton" onClick={() => animateScroll.scrollToBottom(options())} > DATA SHEETS </button>
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