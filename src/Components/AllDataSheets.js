import Model from "./Model";
import DataSheet from "../Css/DataSheet.css"

export default function AllDataSheets({ ...props }) {
    return (
        <div className="DataBase">
            <div className="DataDetails">
                <h1> STRIKE TEAM </h1>
                <Model
                    title="FIRE WARRIOR"
                    stats1="M6 WS5+ BS4+ S3 T3 W1 A1	LD7	SV4+"
                    weapon1="Pulse Rifle R:24 RapidFire:1 S:7 AP:0 D:1"
                    weapon2="Pulse Pistol R:12 Pistol:1 S:5 AP:0 D:1"
                />
                <Model
                    title="FIRE WARRIOR SHAS'UI"
                    stats1="M6 WS5+ BS4+ S3 T3 W1 A2 LD8 SV4+"
                    weapon1="Pulse Rifle R:24 RapidFire:1 S:7 AP:0 D:1"
                    weapon2="Pulse Pistol R:12 Pistol:1 S:5 AP:0 D:1"
                    warGear1="Markerlight"
                />
                <Model
                    title="SUPPORT TURRET"
                    stats1="M- WS- BS4+ S3 T3 W1 A- LD4 SV4+"
                    weapon1="Smart missile system: R:30 Heavy:4 S:5 AP:-1 D:1"
                    weaponAbility1="Indirect Fire"
                />
            </div>
            <div className="DataDetails">
                <h1> GHOSTHEEL BATTLESUIT </h1>
                <Model
                    title="GHOSTKEEL SHAS'VRE"

                    stats1="M12 WS5+ BS4+	S6 T7 W7-12 A3	LD9	SV3+"
                    stats2="M8 WS5+ BS5+	S6 T7 W4-6 AD3	LD9	SV3+"
                    stats3="M4 WS5+ BS5+	S6 T7 W1-3 A1	LD9	SV3+"

                    weapon1="Fusion Collider R:24 Heavy:3  S:9 AP:-4 D:D6"
                    weaponAbility1="Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."

                    weapon2="T'au Flamer Assault D6+2 R:12 S:4 AP:0 D1"
                    weaponAbility2="Each time an attack is made with this weapon, that attack automatically hits the target."

                    weapon3="Ghostkeel Fists Melee S:+1 AP:-1 D:2"
                    warGear1="Early Warning Override: Each time the bearer fires Overwatch, it scores hits on unmodified hit rolls of 5+, instead of 6.

                    Each time you use the Fire Overwatch Stratagem, if the bearer is on the battlefield and its unit is selected to fire Overwatch, reduce the CP cost of that Stratagem by 1CP (to a minimum of 0CP). Note that the CP cost is only reduced by 1CP for that use of the Stratagem; any future usages of it cost the normal amount of CPs."
                    abilities1="Electrowarfare Suite: Each time a ranged attack targets this unit, subtract 1 from that attack’s hit roll."
                    abilities2="Infiltrator: During deployment, when you set up this unit, it can be set up anywhere on the battlefield that is more than 9'' away from the enemy deployment zone and any enemy models."
                    abilities3="Explodes: When this unit’s GHOSTKEEL BATTLESUIT model is destroyed, roll one D6 before removing it from play. On a 6 it explodes, and each unit within 6'' suffers D3 mortal wounds."
                />
                <Model
                    title="STEALTH DRONE"
                    stats1="M10 WS5+ BS5+ S3 T4 W1 A1 LD6 SV4+"
                    abilities1="Stealth Field Generator: This unit cannot be selected as a target for ranged attacks unless it is the closest eligible target to the firing model or the firing model is within 18 inches of it."
                />
            </div>
            <div className="DataDetails">
                <h1> STEALTH BATTLESUITS </h1>
                <Model
                    title="Stealth Shas’ui"
                    stats1="M8 WS5+ BS4+	S4 T4 W2 A2	LD8	SV3+"

                    weapon1="Burst Cannon R:18 Assult:6  S:5 AP:0 D:1"

                    warGear1="Homing Beacon: ‘Homing Beacon (Action): In your Command phase, any number of units from your army that are equipped with homing beacons can start to perform this action. The action is completed at the start of the Reinforcements step of your next Movement phase. When it is completed, the unit performing the action loses its homing beacon and one friendly <SEPT> CRISIS CORE unit that was setup in a Manta hold (see Manta Strike) can be set up on the battlefield within 3inches of the unit and more than 9inches away from any enemy models, even if it is the first battle round.’"
                    abilities1="Camouflage Fields: Each time an attack is made against this unit, subtract 1 from that attack’s hit roll. Each time a ranged attack is allocated to a model in this unit while it is receiving the benefits of cover, add an additional 1 to any armour saving throw made against that attack."
                    abilities2="Infiltrator: During deployment, when you set up this unit, it can be set up anywhere on the battlefield that is more than 9'' away from the enemy deployment zone and any enemy models."
                />
                <Model
                    title="Stealth Shas’vre"
                    stats1="M8 WS5+ BS4+	S4 T4 W2 A2	LD9	SV3+"

                    weapon1="Burst Cannon R:18 Assult:6  S:5 AP:0 D:1"

                    warGear1="Homing Beacon: ‘Homing Beacon (Action): In your Command phase, any number of units from your army that are equipped with homing beacons can start to perform this action. The action is completed at the start of the Reinforcements step of your next Movement phase. When it is completed, the unit performing the action loses its homing beacon and one friendly <SEPT> CRISIS CORE unit that was setup in a Manta hold (see Manta Strike) can be set up on the battlefield within 3inches of the unit and more than 9inches away from any enemy models, even if it is the first battle round.’"
                    abilities1="Camouflage Fields: Each time an attack is made against this unit, subtract 1 from that attack’s hit roll. Each time a ranged attack is allocated to a model in this unit while it is receiving the benefits of cover, add an additional 1 to any armour saving throw made against that attack."
                    abilities2="Infiltrator: During deployment, when you set up this unit, it can be set up anywhere on the battlefield that is more than 9'' away from the enemy deployment zone and any enemy models."
                />
            </div>
            <div className="DataDetails">
                <h1> PATHFINDER TEAM </h1>
                <Model
                    title="Pathfinder"
                    stats1="M7 WS5+ BS4+	S3 T3 W1 A1	LD7	SV5+"

                    weapon1="Pulse Pistol R:12 Pistol:1 S:5 AP:0 D:1"
                    weapon2="Ion Rifle R:12 Heavy:3 S:7 AP:-2 D:1"
                    weapon3="Rail Rifle R:12 Heavy:1 S:8 AP:-4 D:1"
                    weapon4="Pulse Carbine R:24 Assult2 S:5 AP:0 D:1"

                    warGear1="MarkerLight"
                    warGear2="Neuroweb System Jammer"
                    warGear3="Drone Controller"

                    abilities1="Target Uploaded: This unit can start the Fire Markerlights action at the end of your Movement phase, instead of at the start."
                    abilities2="Vanguard: At the start of the first battle round, models in this unit can make a Normal Move of up to 7 inches. They cannot end this move within 9 inches of any enemy models."
                />
                <Model
                    title="Pathfinder Shas’ui"
                    stats1="M7 WS5+ BS4+	S3 T3 W1 A2	LD8	SV5+"
                    weapon1="Pulse Pistol R:12 Pistol:1 S:5 AP:0 D:1"
                    weapon2="Pulse Carbine R:24 Assult2 S:5 AP:0 D:1"
                    warGear1="MarkerLight"

                    abilities1="Target Uploaded: This unit can start the Fire Markerlights action at the end of your Movement phase, instead of at the start."
                    abilities2="Vanguard: At the start of the first battle round, models in this unit can make a Normal Move of up to 7 inches. They cannot end this move within 9 inches of any enemy models."
                />
            </div>
            <div className="DataDetails">
                <h1> BROADSIDE BATTLESUITS </h1>
                <Model
                    title="Broadside Shas’ui"
                    stats1="M5 WS5+ BS4+	S5 T5 W8 A3	LD8	SV2+"

                    weapon1="Heavy rail rifle R:60 Heavy:2 S:9 AP:-4 D:D3+3"
                    weaponAbility1="Each time a successful wound roll is made for an attack with this weapon, the target suffers 1 mortal wound in addition to any other damage."
                    weapon2="Seeker Missile R:72 Heavy:1 S:9 AP:-3 D:2D3"
                    weaponAbility2="The bearer can only shoot with each seeker missile it is equipped with once per battle."
                    weapon3="Twin Smart Missile System R:30 Heavy8 S:5 AP:-1 D:1"
                    weaponAbility3="Indirect Fire. This weapon can target units that are not visible to the bearer. Each time an attack is made with this weapon, the target does not receive the benefits of Light Cover against that attack."
                    weapon4="Crushing bulk R:Melee Melee S:+1 AP:-1 D:1"
                />
            </div>
            <div className="DataDetails">
                <h1> STORMSURGE </h1>
                <Model
                    title="Stormsurge"
                    stats1="M8 WS5+ BS4+	S8 T8 W12-22 A3	LD8	SV2+"
                    stats2="M8 WS5+ BS4+	S8 T8 W6-11 A3	LD8	SV2+"
                    stats3="M8 WS5+ BS4+	S8 T8 W1-5 A3	LD8	SV2+"

                    weapon1="Cluster rocket system R:48 Heavy:4D6 S:5 AP:-1 D:1"
                    weaponAbility1="Blast"
                    weapon2="Destroyer Missile R:72 Heavy:1 S:12 AP:-5 D:2D3"
                    weaponAbility2="The bearer can only shoot with each destroyer missile it is equipped with once per battle. Each time the bearer is selected to shoot, it cannot shoot with more than two of the destroyer missiles it is equipped with."
                    weapon3="Smart Missile System R:30 Heavy4 S:5 AP:-1 D:1"
                    weaponAbility3="Indirect Fire. This weapon can target units that are not visible to the bearer. Each time an attack is made with this weapon, the target does not receive the benefits of Light Cover against that attack."
                    weapon4="Twin Airbursting Fragmentation projector R:24 Assult2D6 S:4 AP:-1 D:1"
                    weapon4Ability3="Indirect Fire. Blast. This weapon can target units that are not visible to the bearer."


                    warGear1="Counterfire defence system"
                    warGear2="Early warning override Each time the bearer fires Overwatch, it scores hits on unmodified hit rolls of 5+, instead of 6.
                    Each time you use the Fire Overwatch Stratagem, if the bearer is on the battlefield and its unit is selected to fire Overwatch, reduce the CP cost of that Stratagem by 1CP (to a minimum of 0CP). Note that the CP cost is only reduced by 1CP for that use of the Stratagem; any future usages of it cost the normal amount of CPs."
                    warGear3="Target lock 	
                    Each time the bearer makes a ranged attack, the target does not receive the benefits of Light Cover against that attack."
                    warGear4="Drone controller"

                    abilities1="Stabilising Anchors: This model can perform the following action: ‘Deploy Anchors (Action): At the start of your Movement phase, any number of STORMSURGE models from your army can start to perform this action. The action is completed at the start of your next Shooting phase. If this action is successfully completed, until the end of the phase, each time this model makes a ranged attack, you can re-roll the hit roll.’"
                    abilities2="Walking Battleship: This model is eligible to declare a charge in a turn in which it Fell Back. Each time this model makes a Normal Move, Advances or Falls Back, it can be moved across other models (excluding MONSTER and VEHICLE models) as if they were not there."
                    abilities3="Explodes: When this model is destroyed, roll one D6 before removing it from play. On a 6 it explodes, and each unit within 2D6 inches suffers D6 mortal wounds."
                    abilities4="Stormsurge Shield Generator: This model has a 4+ invulnerable save."


                />
            </div>
            <div className="DataDetails">
                <h1> CADRE FIREBLADE </h1>
                <Model
                    title="Cadre Fireblade"
                    stats1="M6 WS4+ BS3+	S4 T4 W4 A3	LD8	SV4+"

                    weapon1="Fireblade pulse rifle R:36 RapidFire:1 S:5 AP:-2 D:2"

                    warGear1="MarkerLight"

                    abilities1="Volley Fire (Aura): While a friendly SEPT CORE unit is within 6 of this unit’s CADRE FIREBLADE model, each time a CORE model in that unit makes an attack with a pulse weapon, an unmodified hit roll of 6 scores one additional hit."
                    abilities2="Target Sighted: In your Command phase, select one friendly SEPT FIRE WARRIOR TEAM unit within 9 of this unit’s CADRE FIREBLADE model; until the start of your next Command phase, each time a CORE model in that unit makes a ranged attack, re-roll a hit roll of 1."

                />
            </div>
            <div className="DataDetails">
                <h1> COMMANDER IN ENFORCER BATTLESUIT </h1>
                <Model
                    title="COMMANDER IN ENFORCER BATTLESUIT"
                    stats1="M8 WS3+ BS2+	S5 T5 W7 A4	LD10	SV2+"

                    weapon1="Cyclic ion blaster R:24 Assult3:1 S:7 AP:-2 D:1 or R:36 Assult:1 S:8 AP:-2 D:2 "
                    weaponAbility1="Before selecting targets, select one of the profiles below to make attacks with.Each time an unmodified hit roll of 1 is made for an attack with this weapon profile, the bearer’s unit suffers 1 mortal wound after shooting with this weapon."
                    weapon2="Missile pod R:30 Assult:2 S:7 AP:-2 D:2"
                    weapon3="Fusion blaster R:18 Assult:1 S:8 AP:-4 D:D6"
                    weapon3Ability="Each time an attack made with this weapon targets a unit within half range, that attack has a Damage characteristic of D6+2."

                    warGear1="Shield generator The bearer has a 4+ invulnerable save."

                    abilities1="Hardened Armour: Each time an attack is allocated to this unit’s ENFORCER BATTLESUIT COMMANDER model, subtract 1 from the Damage characteristic of that attack (to a minimum of 1)."
                    abilities2="Master of War (Aura): While a friendly SEPT CORE unit is within 6 of this unit’s ENFORCER BATTLESUIT COMMANDER model, each time a CORE model in that unit makes an attack, re-roll a hit roll of 1."
                    abilities3="Resolute Firebase: In your Command phase, you can select one friendly <SEPT> CRISIS CORE unit within 9 of this unit’s ENFORCER BATTLESUIT COMMANDER model. Until the start of your next Command phase, that unit gains the Objective Secured ability."

                />
            </div>
        </div>
    );
}