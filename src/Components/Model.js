import "../Css/DataSheet.css";

export default function Model({ ...props }) {
    return (
        <div >
            <div className="DataText">
                <b> {props.title} </b>
                {HideListItem(props.stats1)}
                {HideListItem(props.stats2)}
                {HideListItem(props.stats3)}
            </div>
            <div className="DataText">
                {HideTitle(props.weapon1, "WEAPONS")}
                <ul>
                    {HideText(props.weapon1)}
                    {HideText(props.weaponAbility1)}
                    {HideText(props.weapon2)}
                    {HideText(props.weaponAbility2)}
                    {HideText(props.weapon3)}
                    {HideText(props.weaponAbility3)}
                    {HideText(props.weapon4)}
                    {HideText(props.weaponAbility4)}
                    {HideText(props.weapon5)}
                    {HideText(props.weaponAbility5)}
                </ul>
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