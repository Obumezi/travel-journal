import pin from '../assets/map-pin.svg'

export function TravelCard(props) {
    return (
        <div className="title-container">
            {/* if image is being gotten directly from the web you can specify the path to the url directly  */}
            <img className="title-image" src={`${props.item.imageUrl}`} alt="travel" />

            <div className="details-container">

                <div className="top-details">
                    <img className="card-pin" src={pin} alt="map pin" />
                    <div className="location">{props.item.location}</div>
                    <a className="title-map" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>

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