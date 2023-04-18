import '../Css/WARLORDTRAITS.css'

export default function WARLORDTRAITS({ ...props }) {
    return (
        <div className="LordBase">
            <h1> PRECISION OF THE HUNTER </h1>
            <div className="LordDetails">
                <h3>STORM OF FIRE</h3>
                <ul>
                    <li className="LordText">Each time this WARLORD makes an attack, you can re-roll the hit roll and you can re-roll the wound roll..</li>
                </ul>
            </div>
            <div className="LordDetails">
                <h3>THROUGH UNITY, DEVASTATION</h3>
                <ul >
                    <li className="LordText"> While a friendly sept CORE unit is within 6" of this WARLORD, each time a CORE model in that unit makes a ranged attack, on an unmodified wound roll of 6, improve the Armour Penetration characteristic of that attack by 1.</li>
                </ul>
            </div>
            <div className="LordDetails">
                <h3>A GHOST WALKS AMONG US</h3>
                <ul >
                    <li className="LordText"> Each time an attack is made against this WARLORD, subtract 1 from that attack’s hit roll.
                        Each time this WARLORD Advances, do not make an Advance roll. Instead, until the end of the phase, add 6" to the Move characteristic of this WARLORD.</li>
                </ul>
            </div>
            <div className="LordDetails">
                <h3>THROUGH BOLDNESS, VICTORY</h3>
                <ul >
                    <li className="LordText"> In your Command phase, select one friendly SEPT CORE unit within 9" of this WARLORD. Until the start of your next Command phase, each time a CORE model in that unit makes a ranged attack, an unmodified hit roll of 6 automatically wounds the target.</li>
                </ul>
            </div>
            <div className="LordDetails">
                <h3>EXEMPLAR OF THE KAUYON</h3>
                <ul >
                    <li className="LordText"> After both players have deployed their armies and determined who has the first turn, select up to one friendly SEPT unit, or up to three friendly SEPT units if you selected the Kauyon Tactical Philosophy this battle, and redeploy them. If the mission uses the Strategic Reserves rules, any of those units can be placed into Strategic Reserves without having to spend any additional CPs, regardless of how many units are already in Strategic Reserves. If both players have abilities that redeploy units, roll off: the winner chooses who redeploys their units first. </li>
                </ul>
            </div>
            <div className="LordDetails">
                <h3>EXEMPLAR OF THE MONT’KA</h3>
                <ul >
                    <li className="LordText"> In your Command phase, select one friendly SEPT CORE unit within 9" of this WARLORD. Until the start of your next Command phase, each time a Core model in that unit makes a ranged attack that targets an enemy unit within 9", or 12" if you selected the Mont’ka Tactical Philosophy this battle, you can re-roll the wound roll.</li>
                </ul>
            </div>
        </div>
    );
}