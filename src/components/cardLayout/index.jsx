import Card from './assets/Card';

const CardLayout = ({ hide }) => {
    return (
        <>
            <div className={`card-wrapper ${hide ? 'd-none' : ''}`}>
                <div className="card-inner-w">
                    <div className="heading">
                        <h2>Select a Card 🔥</h2>
                    </div>
                    <Card />
                </div>
            </div>
        </>
    )
}

export default CardLayout;
