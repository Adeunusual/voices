import Card from './assets/Card';
// import CardCarousel from './assets/CardCarousel';

const CardLayout = ({ hide }) => {
    return (
        <div className={`card-wrapper ${hide ? 'd-none' : ''}`}>
            <div className="card-inner-w">
                <div className="heading">
                    <h2>Select a Card 🔥</h2>
                </div>
                <Card />
                {/* <CardCarousel /> */}
            </div>
        </div>
    )
}

export default CardLayout;
