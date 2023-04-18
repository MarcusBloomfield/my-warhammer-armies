import '../Css/PHILOSOPHIESOFWAR.css'

export default function PHILOSOPHIESOFWAR({ ...props }) {
    return (
        <div className="WarBase">
            <h1> PHILOSOPHIES OF WAR </h1>
            <div className="WarDetails">
                <h3>MONT’KA</h3>
                <ul> In battle rounds 1-3:
                    <li className="WarText">Each time this unit makes a Normal Move or Advances in your Movement phase, until the end of your Shooting phase, it counts as having Remained Stationary.</li>
                    <li className="WarText"> Each time a model in this unit makes a ranged attack that targets the closest eligible enemy unit within the range shown in the table below, re-roll a wound roll of 1.</li>
                </ul>
            </div>
            <div className="WarDetails">
                <h3>KAUYON</h3>
                <ul > In battle rounds 3-5:
                    <li className="WarText"> This unit is eligible to shoot in a turn in which it Fell Back, but if it does, then until the end of the turn, each time a model in this unit makes a ranged attack, subtract 1 from that attack’s hit roll.</li>
                <li className="Warext">Each time a model in this unit makes a ranged attack that targets the closest eligible enemy unit within 12", if that model is not within Engagement Range of any enemy units and did not Fall Back this turn, on an unmodified hit roll of the value shown in the table below, if that attack scores a hit, it scores 1 additional hit.</li>
                </ul>
            </div>
        </div>
    );
}