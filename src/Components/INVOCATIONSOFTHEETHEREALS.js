import '../Css/INVOCATIONSOFTHEETHEREALS.css'
import Element from "react-scroll/modules/components/Element";

export default function INVOCATIONSOFTHEETHEREALS({ ...props }) {
    return (
        <Element name="INVOCATIONSOFTHEETHEREALS" className="EtherealBase">
            <h1> INVOCATIONS OF THE ETHEREALS </h1>
            <div className="EtherealDetails">
                <h3>STORM OF FIRE</h3>
                <ul>
                    <li className="EtherealText">If this invocation is inspiring, select one friendly T’AU EMPIRE CORE unit (excluding FARSIGHT ENCLAVES units) within 6" of this ETHEREAL. That unit can make ranged attacks without any action it is performing failing.</li>
                </ul>
            </div>
            <div className="EtherealDetails">
                <h3>SENSE OF STONE</h3>
                <ul >
                    <li className="EtherealText"> If this invocation is inspiring, select one friendly T’AU EMPIRE CORE unit (excluding FARSIGHT ENCLAVES units) within 6" of this ETHEREAL. Each time a CORE model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.</li>
                </ul>
            </div>
            <div className="EtherealDetails">
                <h3>ZEPHYR’S GRACE</h3>
                <ul >
                    <li className="EtherealText"> If this invocation is inspiring, select one friendly T’AU EMPIRE CORE unit (excluding FARSIGHT ENCLAVES units) within 6" of this ETHEREAL. Each time a ranged attack is made against that unit, if it did not Remain Stationary in your previous Movement phase, subtract 1 from that attack’s hit roll.</li>
                </ul>
            </div>
            <div className="EthereaDetails">
                <h3>UNIFYING MANTRA</h3>
                <ul >
                    <li className="EtherealText"> If this invocation is inspiring, then while a friendly T’AU EMPIRE CORE unit (excluding FARSIGHT ENCLAVES units) is within 6" of this ETHEREAL:

                        You can re-roll Morale tests taken for that unit.
                        Add 1 to Combat Attrition tests taken for that unit.</li>
                </ul>
            </div>
            <div className="EtherealDetails">
                <h3>WISDOM OF THE GUIDES</h3>
                <ul >
                    <li className="EtherealText"> If this invocation is inspiring, you gain 1 Command point.</li>
                </ul>
            </div>
        </Element>
    );
}