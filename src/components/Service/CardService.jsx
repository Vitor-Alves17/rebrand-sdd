
export const CardService = ({title, description, listElements}) => {
    return (
        <div className="card">
            <img src="" alt=""/>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    <li>{listElements}</li>
                    <li>{listElements}</li>
                    <li>{listElements}</li>
                </ul>
            </div>
        </div>
    )
}