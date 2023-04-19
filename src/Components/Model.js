import "../Css/DataSheet.css";

export default function Model({ ...props }) {
    return (
        <div className="Model">
            <div className="DataText">
                <b> {props.title} </b>
                {HideListItem(props.stats1)}
                {HideListItem(props.stats2)}
                {HideListItem(props.stats3)}
            </div>
            <div className="DataText">
                {HideTitle(props.weapon1, "WEAPONS")}
                <div>
                    {HideBold(props.weapon1name)}
                    {HideListItem(props.weapon1)}
                    {HideListItem(props.weaponAbility1)}

                    {HideBold(props.weapon2name)}
                    {HideListItem(props.weapon2)}
                    {HideListItem(props.weaponAbility2)}

                    {HideBold(props.weapon3name)}
                    {HideListItem(props.weapon3)}
                    {HideListItem(props.weaponAbility3)}

                    {HideBold(props.weapon4name)}
                    {HideListItem(props.weapon4)}
                    {HideListItem(props.weaponAbility4)}

                    {HideBold(props.weapon5name)}
                    {HideListItem(props.weapon5)}
                    {HideListItem(props.weaponAbility5)}
                </div>
            </div>

            <div className="DataText">
                {HideTitle(props.warGear1, "WARGEAR")}
                {HideListItem(props.warGear1)}
                {HideListItem(props.warGear2)}
                {HideListItem(props.warGear3)}
                {HideListItem(props.warGear4)}
            </div>

            <div className="DataText">
                {HideTitle(props.abilities1, "ABILITIES")}
                {HideListItem(props.abilities1)}
                {HideListItem(props.abilities2)}
                {HideListItem(props.abilities3)}
            </div>
        </div>
    );
}

function HideText(weapon) {
    if (weapon != null) return (<p>{weapon}</p>)
    else return null
}

function HideListItem(stats) {
    if (stats != null) return (<li>{stats}</li>)
    else return null
}

function HideTitle(weapon, title) {
    if (weapon != null) return (<b> {title} </b>)
    else return null
}
function HideBold(weapon) {
    if (weapon != null) return (<b> {weapon} </b>)
    else return null
}