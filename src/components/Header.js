import newglobe from '../assets/new-globe.svg'

export function Header(){
    return (
        <div className="header-container">
            <img src={newglobe} alt="globe" className="travel-globe" />
            <h5 className="header-text">My travel journal</h5>
            



        </div>
    )
}