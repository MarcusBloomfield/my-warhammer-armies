import '../Css/ABILITIES.css'
import Element from "react-scroll/modules/components/Element";

export default function ABILITIES() {
    return (
        <Element name="ABILITIES" className="AbilityBase">
            <h1> ABILITIES </h1>
            <ul className='AbilityDetails'>
                <h3>BATTLESUITS</h3>
                <li className='AbilityText'> BATTLESUIT models in this unit can make attacks with ranged weapons even when their unit is within Engagement Range of enemy units, but they can only make such attacks against enemy units that they are within Engagement Range of.</li>
            </ul>
            <ul className='AbilityDetails'>
                <h3> MARKERLIGHTS</h3>
                <li className='AbilityText'>for each markerlight that model is equipped with, select one enemy unit within 36" of that model that would be an eligible target for that model if its unit had been selected to shoot, and roll one D6: on a 3+, that enemy unit gains one Markerlight token.’
                    Each time a model in that unit makes a ranged attack against a unit with one or more Markerlight tokens, add 1 to that attack’s hit roll.
                    After that unit has finished making attacks, for each enemy unit targeted by those attacks, remove one Markerlight token from that enemy unit.
                    At the end of your Shooting phase, remove all Markerlight tokens from enemy units..
                </li>
            </ul>
            <ul className='AbilityDetails'>
                <h3>MANTA STRIKE</h3>
                <li className='AbilityText'>During deployment, if every model in this unit has this ability, you can set up this unit in a Manta hold instead of setting it up on the battlefield. If you do, then in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9" away from any enemy models.</li>
            </ul>
            <ul className='AbilityDetails'>
                <h3>AMBUSHING PREDATORS</h3>
                <li className='AbilityText'>At the start of the first battle round, models in this unit can make a Normal Move of up to 7". They cannot end this move within 9" of any enemy models.
                </li>
            </ul>
            <ul className='AbilityDetails'>
                <h3>INSPIRED TO GREATNESS</h3>
                <li className='AbilityText'>
                    In your Command phase, select one friendly T’AU EMPIRE CORE or T’AU AUXILIARY unit within 6" of this unit’s ETHEREAL model (excluding FARSIGHT ENCLAVES units). Until the start of your next Command phase, while that unit is performing an action, it can make ranged attacks without that action failing.
                </li>
            </ul>
        </Element>
    );
}