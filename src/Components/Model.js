import "../Css/DataSheet.css";

export default function Model({ ...props }) {
    return (
        <div className="Model">
            <h2 className="ModelName"> {props.title}</h2>
            <h3 className="ModelCost"> Points: {props.modelCost}  </h3>
            <div className="DataText">
                {HideBold("STATS")}
                {HideListItem(props.stats1)}
                {HideListItem(props.stats2)}
                {HideListItem(props.stats3)}
            </div>
            {HideTitle(props.weapon1, "WEAPONS")}
            <div className="DataText">
                <>
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
                </>
            </div>

            {HideTitle(props.warGear1, "WARGEAR")}
            <div className="DataText">
                {HideBold(props.warGear1name)}
                {HideListItem(props.warGear1)}

                {HideBold(props.warGear2name)}
                {HideListItem(props.warGear2)}

                {HideBold(props.warGear3name)}
                {HideListItem(props.warGear3)}

                {HideBold(props.warGear4name)}
                {HideListItem(props.warGear4)}
            </div>

            {HideTitle(props.abilities1, "ABILITIES")}
            <div className="DataText">
                {HideBold(props.abilities1name)}
                {HideListItem(props.abilities1)}

                {HideBold(props.abilities2name)}
                {HideListItem(props.abilities2)}

                {HideBold(props.abilities3name)}
                {HideListItem(props.abilities3)}
                {HideBold(props.abilities4name)}
                {HideListItem(props.abilities4)}
                {HideBold(props.abilities5name)}
                {HideListItem(props.abilities5)}
            </div>
        </div >
    );
}

function HideText(weapon) {
    if (weapon != null) return (<p>{weapon}</p>)
    else return null
}

function HideListItem(stats) {
    if (stats != null) return (<li className="ModelListItem">{stats}</li>)
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