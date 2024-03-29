import Model from "./Model";
import DataSheet from "../Css/DataSheet.css"
import Element from "react-scroll/modules/components/Element";

export default function AllDataSheets() {
    return (
        <Element name="ALLDATASHEETS" className="DataBase">

            <div className="DataDetails">
                <h1 className="DataTitle "> DATA SHEETS </h1>
            </div>
            <div className="DataDetails">
                <h1 className="DataTitle"> GHOSTHEEL BATTLESUIT </h1>
                <Model
                    title="GHOSTKEEL SHAS'VRE"
                    modelCost="160/unit"

                    stats1="M12 WS5+ BS4+	S6 T7 W7-12 A3	LD9	SV3+"
                    stats2="M8 WS5+ BS5+	S6 T7 W4-6 AD3	LD9	SV3+"
                    stats3="M4 WS5+ BS5+	S6 T7 W1-3 A1	LD9	SV3+"

                    weapon1name="Fusion Collider "
                    weapon1="R:24 Heavy:3  S:9 AP:-4 D:D6"
                    weaponAbility1="Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."

                    weapon2name="T'au Flamer Assault "
                    weapon2="D6+2 R:12 S:4 AP:0 D1"
                    weaponAbility2="Each time an attack is made with this weapon, that attack automatically hits the target."

                    weapon3name="Ghostkeel Fists Melee "
                    weapon3="S:+1 AP:-1 D:2"

                    warGear1name="Early Warning Override"
                    warGear1="Each time the bearer fires Overwatch, it scores hits on unmodified hit rolls of 5+, instead of 6. Each time you use the Fire Overwatch Stratagem, if the bearer is on the battlefield and its unit is selected to fire Overwatch, reduce the CP cost of that Stratagem by 1CP (to a minimum of 0CP). Note that the CP cost is only reduced by 1CP for that use of the Stratagem; any future usages of it cost the normal amount of CPs."

                    abilities1name="Electrowarfare Suite"
                    abilities1=" Each time a ranged attack targets this unit, subtract 1 from that attack’s hit roll."

                    abilities2name="Infiltrator"
                    abilities2="During deployment, when you set up this unit, it can be set up anywhere on the battlefield that is more than 9'' away from the enemy deployment zone and any enemy models."

                    abilities3name="Explodes"
                    abilities3="When this unit’s GHOSTKEEL BATTLESUIT model is destroyed, roll one D6 before removing it from play. On a 6 it explodes, and each unit within 6'' suffers D3 mortal wounds."
                />
                <Model
                    title="STEALTH DRONE"
                    stats1="M10 WS5+ BS5+ S3 T4 W1 A1 LD6 SV4+"

                    abilities1name="Stealth Field Generator"
                    abilities1="This unit cannot be selected as a target for ranged attacks unless it is the closest eligible target to the firing model or the firing model is within 18 inches of it."
                />
            </div>
            <div className="DataDetails">
                <h1 className="DataTitle"> STEALTH BATTLESUITS </h1>
                <Model
                    title="Stealth Shas’ui"
                    modelCost="25"
                    stats1="M8 WS5+ BS4+	S4 T4 W2 A2	LD8	SV3+"

                    weapon1name="Burst Cannon "
                    weapon1="R:18 Assult:6  S:5 AP:0 D:1"

                    warGear1name="Homing Beacon"
                    warGear1="Homing Beacon (Action): In your Command phase, any number of units from your army that are equipped with homing beacons can start to perform this action. The action is completed at the start of the Reinforcements step of your next Movement phase. When it is completed, the unit performing the action loses its homing beacon and one friendly <SEPT> CRISIS CORE unit that was setup in a Manta hold (see Manta Strike) can be set up on the battlefield within 3inches of the unit and more than 9inches away from any enemy models, even if it is the first battle round.’"

                    abilities1name="Camouflage Fields"
                    abilities1="Each time an attack is made against this unit, subtract 1 from that attack’s hit roll. Each time a ranged attack is allocated to a model in this unit while it is receiving the benefits of cover, add an additional 1 to any armour saving throw made against that attack."

                    abilities2name="Infiltrator"
                    abilities2="During deployment, when you set up this unit, it can be set up anywhere on the battlefield that is more than 9'' away from the enemy deployment zone and any enemy models."
                />
                <Model
                    title="Stealth Shas’vre"
                    modelCost="25"
                    stats1="M8 WS5+ BS4+	S4 T4 W2 A2	LD9	SV3+"

                    weapon1name="Burst Cannon "
                    weapon1="R:18 Assult:6  S:5 AP:0 D:1"

                    warGear1name="Homing Beacon"
                    warGear1="Homing Beacon: ‘Homing Beacon (Action): In your Command phase, any number of units from your army that are equipped with homing beacons can start to perform this action. The action is completed at the start of the Reinforcements step of your next Movement phase. When it is completed, the unit performing the action loses its homing beacon and one friendly <SEPT> CRISIS CORE unit that was setup in a Manta hold (see Manta Strike) can be set up on the battlefield within 3inches of the unit and more than 9inches away from any enemy models, even if it is the first battle round.’"

                    abilities1name="Camouflage Fields"
                    abilities1="Camouflage Fields: Each time an attack is made against this unit, subtract 1 from that attack’s hit roll. Each time a ranged attack is allocated to a model in this unit while it is receiving the benefits of cover, add an additional 1 to any armour saving throw made against that attack."

                    abilities2name="Infiltrator"
                    abilities2="Infiltrator: During deployment, when you set up this unit, it can be set up anywhere on the battlefield that is more than 9'' away from the enemy deployment zone and any enemy models."
                />
            </div>


            <div className="DataDetails">
                <h1 className="DataTitle"> STORMSURGE </h1>
                <Model
                    title="Stormsurge"
                    modelCost="415"
                    stats1="M8 WS5+ BS4+	S8 T8 W12-22 A3	LD8	SV2+"
                    stats2="M8 WS5+ BS4+	S8 T8 W6-11 A3	LD8	SV2+"
                    stats3="M8 WS5+ BS4+	S8 T8 W1-5 A3	LD8	SV2+"

                    weapon1name="Cluster rocket system "
                    weapon1="R:48 Heavy:4D6 S:5 AP:-1 D:1"
                    weaponAbility1="Blast"
                    weapon2name="Destroyer Missile "
                    weapon2="R:72 Heavy:1 S:12 AP:-5 D:2D3"
                    weaponAbility2="The bearer can only shoot with each destroyer missile it is equipped with once per battle. Each time the bearer is selected to shoot, it cannot shoot with more than two of the destroyer missiles it is equipped with."

                    weapon3name="Smart Missile System "
                    weapon3="R:30 Heavy4 S:5 AP:-1 D:1"
                    weaponAbility3="Indirect Fire. This weapon can target units that are not visible to the bearer. Each time an attack is made with this weapon, the target does not receive the benefits of Light Cover against that attack."

                    weapon4name="Twin Airbursting Fragmentation projector "
                    weapon4="R:24 Assult2D6 S:4 AP:-1 D:1"
                    weapon4Ability3="Indirect Fire. Blast. This weapon can target units that are not visible to the bearer."

                    weapon5name="Pulse blastcannon"
                    weapon5="R:24 Heavy2 S:16 AP:-4 D:12 or R:48 Heavy6 S:12 AP:-2 D:4"


                    warGear1name="Counterfire defence system"
                    warGear1="Counterfire defence system"

                    warGear2name="Early warning override"
                    warGear2="Each time the bearer fires Overwatch, it scores hits on unmodified hit rolls of 5+, instead of 6.
                    Each time you use the Fire Overwatch Stratagem, if the bearer is on the battlefield and its unit is selected to fire Overwatch, reduce the CP cost of that Stratagem by 1CP (to a minimum of 0CP). Note that the CP cost is only reduced by 1CP for that use of the Stratagem; any future usages of it cost the normal amount of CPs."

                    warGear3name="Target lock"
                    warGear3="Each time the bearer makes a ranged attack, the target does not receive the benefits of Light Cover against that attack."

                    warGear4name="Drone controller"
                    warGear4="Drone controller"

                    abilities1name="Stabilising Anchors"
                    abilities1="This model can perform the following action: ‘Deploy Anchors (Action): At the start of your Movement phase, any number of STORMSURGE models from your army can start to perform this action. The action is completed at the start of your next Shooting phase. If this action is successfully completed, until the end of the phase, each time this model makes a ranged attack, you can re-roll the hit roll.’"

                    abilities2name="Walking Battleship"
                    abilities2="This model is eligible to declare a charge in a turn in which it Fell Back. Each time this model makes a Normal Move, Advances or Falls Back, it can be moved across other models (excluding MONSTER and VEHICLE models) as if they were not there."

                    abilities3name="Explodes"
                    abilities3="When this model is destroyed, roll one D6 before removing it from play. On a 6 it explodes, and each unit within 2D6 inches suffers D6 mortal wounds."

                    abilities4name="Stormsurge Shield Generator"
                    abilities4="This model has a 4+ invulnerable save."


                />
            </div>
            <div className="DataDetails">
                <h1 className="DataTitle"> COMMANDER IN ENFORCER BATTLESUIT </h1>
                <Model
                    title="COMMANDER IN ENFORCER BATTLESUIT"
                    modelCost="175"
                    stats1="M8 WS3+ BS2+	S5 T5 W7 A4	LD10	SV2+"


                    weapon1name="Cyclic ion blaster "
                    weapon1="R:24 Assult3:1 S:7 AP:-2 D:1 or R:36 Assult:1 S:8 AP:-2 D:2 "
                    weaponAbility1="Before selecting targets, select one of the profiles below to make attacks with.Each time an unmodified hit roll of 1 is made for an attack with this weapon profile, the bearer’s unit suffers 1 mortal wound after shooting with this weapon."

                    weapon2name="Missile pod"
                    weapon2=" R:30 Assult:2 S:7 AP:-2 D:2"

                    weapon3name="Fusion blaster "
                    weapon3="R:18 Assult:1 S:8 AP:-4 D:D6"
                    weapon3Ability="Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."

                    warGear1name="Shield Generator"
                    warGear1="The bearer has a 4+ invulnerable save."

                    abilities1name="Hardened Armour"
                    abilities1="Each time an attack is allocated to this unit’s ENFORCER BATTLESUIT COMMANDER model, subtract 1 from the Damage characteristic of that attack (to a minimum of 1)."


                    abilities2name="Master of War (Aura)"
                    abilities2="While a friendly SEPT CORE unit is within 6 of this unit’s ENFORCER BATTLESUIT COMMANDER model, each time a CORE model in that unit makes an attack, re-roll a hit roll of 1."

                    abilities3name="Resolute Firebase"
                    abilities3="In your Command phase, you can select one friendly <SEPT> CRISIS CORE unit within 9 of this unit’s ENFORCER BATTLESUIT COMMANDER model. Until the start of your next Command phase, that unit gains the Objective Secured ability."

                />
            </div><div className="DataDetails">
                <h1 className="DataTitle"> STRIKE TEAM </h1>
                <Model
                    title="FIRE WARRIOR"
                    modelCost="85"
                    stats1="M6 WS5+ BS4+ S3 T3 W1 A1	LD7	SV4+"
                    weapon1name="Pulse Rifle "
                    weapon1="R:24 RapidFire:1 S:7 AP:0 D:1"
                    weapon2name="Pulse Pistol  "
                    weapon2="R:12 Pistol:1 S:5 AP:0 D:1"
                />
                <Model
                    title="FIRE WARRIOR SHAS'UI"
                    modelCost="85"
                    stats1="M6 WS5+ BS4+ S3 T3 W1 A2 LD8 SV4+"
                    weapon1name="Pulse Rifle "
                    weapon1=" R:24 RapidFire:1 S:7 AP:0 D:1"
                    weapon2name="Pulse Pistol  "
                    weapon2="R:12 Pistol:1 S:5 AP:0 D:1"

                    warGear1name="Markerlight"
                    warGear1="Markerlight"
                />
                <Model
                    title="SUPPORT TURRET"
                    modelCost="10"
                    stats1="M- WS- BS4+ S3 T3 W1 A- LD4 SV4+"
                    weapon1name="Smart missile system "
                    weapon1=" R:30 Heavy:4 S:5 AP:-1 D:1"
                    weaponAbility1="Indirect Fire"
                />
            </div><div className="DataDetails">
                <h1 className="DataTitle"> PATHFINDER TEAM </h1>
                <Model
                    title="Pathfinder"
                    modelCost="105/unit"
                    stats1="M7 WS5+ BS4+	S3 T3 W1 A1	LD7	SV5+"

                    weapon1name="Pulse Pistol"
                    weapon1=" R:12 Pistol:1 S:5 AP:0 D:1"
                    weapon2name="Ion Rifle "
                    weapon2=" R:12 Heavy:3 S:7 AP:-2 D:1"
                    weapon3name="Rail Rifle"
                    weapon3=" R:12 Heavy:1 S:8 AP:-4 D:1"
                    weapon4name="Pulse Carbine  "
                    weapon4="R:24 Assult2 S:5 AP:0 D:1"

                    warGear1name="Markerlight"
                    warGear1="Markerlight"

                    warGear2name="Neuroweb System Jammer"
                    warGear2="Neuroweb System Jammer"

                    warGear3name="Drone Controller"
                    warGear3="Drone Controller"

                    abilities1name="Target Uploaded"
                    abilities1="This unit can start the Fire Markerlights action at the end of your Movement phase, instead of at the start."
                    abilities2name="Vanguard"
                    abilities2="At the start of the first battle round, models in this unit can make a Normal Move of up to 7 inches. They cannot end this move within 9 inches of any enemy models."
                />
                <Model
                    title="Pathfinder Shas’ui"
                    modelCost="105/unit"
                    stats1="M7 WS5+ BS4+	S3 T3 W1 A2	LD8	SV5+"
                    weapon1name="Pulse Pistol"
                    weapon1=" R:12 Pistol:1 S:5 AP:0 D:1"
                    weapon2name="Pulse Carbine "
                    weapon2=" R:24 Assult2 S:5 AP:0 D:1"

                    warGear1name="Markerlight"
                    warGear1="MarkerLight"

                    abilities1name="Target Uploaded"
                    abilities1="This unit can start the Fire Markerlights action at the end of your Movement phase, instead of at the start."

                    abilities2name="Vanguard"
                    abilities2="At the start of the first battle round, models in this unit can make a Normal Move of up to 7 inches. They cannot end this move within 9 inches of any enemy models."
                />
            </div><div className="DataDetails">
                <h1 className="DataTitle"> BROADSIDE BATTLESUITS </h1>
                <Model
                    title="Broadside Shas’ui"
                    modelCost="105"
                    stats1="M5 WS5+ BS4+	S5 T5 W8 A3	LD8	SV2+"

                    weapon1name="Heavy rail rifle "
                    weapon1=" R:60 Heavy:2 S:9 AP:-4 D:D3+3"
                    weaponAbility1="Each time a successful wound roll is made for an attack with this weapon, the target suffers 1 mortal wound in addition to any other damage."
                    weapon2name="Seeker Missile "
                    weapon2=" R:72 Heavy:1 S:9 AP:-3 D:2D3"
                    weaponAbility2="The bearer can only shoot with each seeker missile it is equipped with once per battle."
                    weapon3name="Twin Smart Missile System"
                    weapon3=" R:30 Heavy8 S:5 AP:-1 D:1"
                    weaponAbility3="Indirect Fire. This weapon can target units that are not visible to the bearer. Each time an attack is made with this weapon, the target does not receive the benefits of Light Cover against that attack."

                    weapon4name="Crushing bulk  "
                    weapon4="R:Melee Melee S:+1 AP:-1 D:1"
                />
            </div>
            <div className="DataDetails">
                <h1 className="DataTitle"> CADRE FIREBLADE </h1>
                <Model
                    title="Cadre Fireblade"
                    modelCost="50"
                    stats1="M6 WS4+ BS3+	S4 T4 W4 A3	LD8	SV4+"


                    weapon1name="Fireblade pulse rifle "
                    weapon1="R:36 RapidFire:1 S:5 AP:-2 D:2"

                    warGear1name="Markerlight"
                    warGear1="MarkerLight"

                    abilities1name="Volley Fire (Aura)"
                    abilities1="While a friendly SEPT CORE unit is within 6 of this unit’s CADRE FIREBLADE model, each time a CORE model in that unit makes an attack with a pulse weapon, an unmodified hit roll of 6 scores one additional hit."

                    abilities2name="Target Sighted"
                    abilities2="In your Command phase, select one friendly SEPT FIRE WARRIOR TEAM unit within 9 of this unit’s CADRE FIREBLADE model; until the start of your next Command phase, each time a CORE model in that unit makes a ranged attack, re-roll a hit roll of 1."

                />
            </div>
            <div className="DataDetails">
                <h1 className="DataTitle"> DRONES </h1>
                <Model
                    title="All Drones"
                    modelCost="10-15"

                    abilities1name="Valued Sacrifice"
                    abilities1="Each time a DRONE model in this unit is destroyed, it is ignored for the purpose of Morale tests if this unit also contains models without the DRONE keyword."

                    abilities2name="Artificial Helpers"
                    abilities2=" DRONE models are ignored for the purposes of:
                        The Look Out, Sir rule.
                                Determining this unit’s Starting Strength, and whether this unit is below Half-strength.
                            Determining this unit’s Toughness characteristic, if it also contains models without the DRONE keyword."

                    abilities3name="Limited Parameters"
                    abilities3="If this unit contains only DRONE models, this unit cannot perform actions (excluding the Fire Markerlights action) and loses the Objective Secured ability if it has it, and cannot gain it through any means."

                    abilities4name="Docked Drone"
                    abilities4="If this model is docked with another: Any weapons this model is equipped with are considered to be equipped to the model it is docked with instead.Attacks cannot be allocated to this model and it does not count as a model on the battlefield for any rules purposes. If the model it is docked with is destroyed, this DRONE model is destroyed as well."

                />
                <Model
                    title="Grav-inhibitor"
                    modelCost="10"
                    stats1="M10	WS5+	BS5+	S3	T4	W1	A1  	LD6 	SV4+"

                    abilities1name="Gravity Wave Projector"
                    abilities1="Subtract 2 from charge rolls made for any unit that declares a charge against this unit."

                />
                <Model
                    title="Recon-Drone"
                    modelCost="10"
                    stats1="M10	WS5+	BS5+	S3	T4	W1	A1  	LD6 	SV4+"

                    abilities1name="Recon Suite"
                    abilities1="Each time a model in this unit makes a ranged attack that targets a unit within 18 inches, the target does not receive the benefits of Light Cover against that attack."

                />
                <Model
                    title="Shield-Drone"
                    modelCost="10"
                    stats1="M10	WS5+	BS5+	S3	T4	W1	A1  	LD6 	SV4+"

                    abilities1name="Drone Shield Generator"
                    abilities1="This model has a 4+ invulnerable save."

                />
                <Model
                    title="Stealth-Drone"
                    stats1="M10	WS5+	BS5+	S3	T4	W1	A1  	LD6 	SV4+"

                    abilities1name="Stealth Field Generator"
                    abilities1="This unit cannot be selected as a target for ranged attacks unless it is the closest eligible target to the firing model or the firing model is within 18 inches of it."

                />

            </div>
        </Element>
    );
}