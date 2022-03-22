import fuji from '../assets/mountfuji.svg'


export function TravelCard(props) {
    return (
        <div className="title-container">
            <img className="title-image" src={fuji} alt="travel"/>

            <div className="test">
                <h5 className="location">{props.item.location}</h5>

                <h1 className="title">{props.item.title}</h1>
                <div className="date">
                    <h5>{props.item.startDate} -</h5>

                    <h5>{props.item.endDate}</h5>
                </div>

                <p className="title-details">{props.item.description}.</p>
            </div>
        </div>
    )
}