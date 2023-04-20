import { animateScroll as scroll } from 'react-scroll'
import Element from "react-scroll/modules/components/Element";

export default function BackToTop() {
    return (
        <Element name="BackToTop" className='backToTopContainer'>
            <button className='backToTopButton' onClick={() => scroll.scrollToTop()}> Up </button>
        </Element >
    );
}