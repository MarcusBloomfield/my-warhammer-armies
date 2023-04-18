import '../Css/STRATAGEMS.css'

export default function STRATAGEMS({ ...props }) {
    return (
        <div className="StratBase">
            <h1> STRATAGEMS </h1>
            <div className="StratDetails">
                <h3>COMMAND RE-ROLL 1CP</h3>
                <ul >
                    <li className="StratText">Use this Stratagem after you have made a hit roll, a wound roll, a damage roll, a saving throw, an Advance roll, a charge roll, a Psychic test, a Deny the Witch test or you have rolled the dice to determine the number of attacks made by a weapon. Re-roll that roll, test or saving throw.</li>
                </ul>
            </div>
            <div className="StratDetails">
                <h3>FIRE OVERWATCH 1CP</h3>
                <ul >
                    <li className="StratText">Use this Stratagem after an enemy unit has declared a charge against one or more units from your army. One of the units that was chosen as the target of that charge can fire Overwatch before the charge roll is made.</li>
                </ul>
            </div>
            <div className="StratDetails">
                <h3>INSANE BRAVERY 2CP</h3>
                <ul >
                    <li className="StratText">Use this Stratagem before you take a Morale test for a unit in your army. That test is automatically passed (do not roll any dice). You can only use this Stratagem once per battle.</li>
                </ul>
            </div>
            <div className="StratDetails">
                <h3>WALL OF MIRRORS 1CP</h3>
                <ul>
                    <li className="StratText">Use this Stratagem at the end of your Movement phase. Select one STEALTH BATTLESUITS or GHOSTKEEL BATTLESUIT unit from your army that is wholly within 9" of any battlefield edges. Remove that unit from the battlefield. In the Reinforcements step of your next Movement phase, you can set that unit back up on the battlefield anywhere that is wholly within 9" of any battlefield edge and more than 9" away from any enemy models. If the battle ends and that unit is not on the battlefield, it is destroyed..</li>

                </ul>
            </div>
            <div className="StratDetails">
                <h3>COUNTERFIRE DEFENCE SYSTEM 1CP/2CP</h3>
                <ul >
                    <li className="StratText"> Use this Stratagem in your opponent’s Shooting phase, when an attack is allocated to a COUNTERFIRE DEFENCE SYSTEM model from your army. The Damage characteristic of that attack is changed to 1. If that model has a Wounds characteristic of 14 or more, this Stratagem costs 2CP; otherwise, it costs 1CP.</li>
                </ul>
            </div>
            <div className="StratDetails">
                <h3>PHOTON GRENADES 1CP</h3>
                <ul >
                    <li className="StratText">Use this Stratagem in your opponent’s Charge phase, when a PHOTON GRENADES unit from your army is selected as a target of a charge declared with an enemy unit (excluding VEHICLE and MONSTER units). Until the end of the turn:
                        Subtract 2 from that unit’s charge rolls.
                        Each time a model in that unit makes an attack, subtract 1 from that attack’s hit roll.
                        The charge roll modifier incurred via this Stratagem is not cumulative with any other negative modifier to a unit’s charge roll.</li>
                </ul>
            </div>
            <div className="StratDetails">
                <h3>ORBITAL ION BEAM 2CP</h3>
                <ul >
                    <li className="StratText"> Use this Stratagem in your Command phase. Place two Ion Beam markers anywhere on the battlefield within 12" of each other. At the start of your next Command phase, draw a straight, imaginary line between the two Ion Beam markers, and then roll one D6 for each unit that this line crosses over, adding 1 if the unit being rolled for is a BUILDING: on a 2-5, that unit suffers D3 mortal wounds; on a 6+, that unit suffers 3 mortal wounds. The Ion Beam markers are then removed. You can only use this Stratagem once.</li>
                </ul>
            </div>
            <div className="StratDetails">
                <h3>RELENTLESS FUSILLADE 1CP</h3>
                <ul >
                    <li className="StratText">Use this Stratagem in your Shooting phase, when a STRIKE TEAM unit from your army is selected to shoot. Until the end of the phase:
                        Instead of following the normal rules for Rapid Fire weapons, models in that unit shooting pulse rifles make double the number of attacks.
                        Each time a CORE model in that unit makes a ranged attack, improve the Armour Penetration characteristic of that attack by 1.</li>
                </ul>
            </div>
            <div className="StratDetails">
                <h3>PULSE ONSLAUGHT 1CP</h3>
                <ul >
                    <li className="StratText">Use this Stratagem in your Shooting phase, when a FIRE WARRIOR TEAM unit from your army is selected to shoot. Until the end of the phase, each time a CORE model in that unit makes an attack with a pulse weapon, an unmodified hit roll of 6 automatically wounds the target.</li>
                </ul>
            </div>
            <div className="StratDetails">
                <h3>POINT-BLANK VOLLEY</h3>
                <ul >
                    <li className="StratText">Use this Stratagem at the start of your Shooting phase. Select one FIRE WARRIOR TEAM unit from your army that is within Engagement Range of any enemy units. Until the end of the phase, pulse blasters, pulse carbines and pulse rifles that models in that unit are equipped with have the Type characteristic Pistol 2.</li>
                </ul>
            </div>
        </div>
    );
}