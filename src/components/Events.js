import klecany from "../assets/images/klecany_.jpg"
import burza from "../assets/images/airsoft-burza_1920.jpg"
import dynamitka from "../assets/images/mp7fRR.jpeg"
import "./Events.css"



const Events = () => {
    return (
        <>
            <div className="container">
                <h2 className="featurette-heading fw-normal lh-1 mt-4 mb-4 text-primary">UDÁLOSTI</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src={burza} alt="" className="card-img-top cover" width="100%" height="225" role="img"
                                focusable="false" />
                            <div className="card-body">
                                <h4 className="card-text">Burza</h4>
                                <p className="card-text">Naše burza je místem, kde můžete prodat své nepoužívané airsoftové vybavení a získat
                                    vybavení nové.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src={dynamitka}className="card-img-top cover" alt="" width="100%" height="225" role="img"
                                focusable="false" />
                            <div className="card-body">
                                <h4 className="card-text">First shot Dynamitka</h4>
                                <p className="card-text">Dátum - prvá airsoft hra v novom areáli.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Pripravujeme</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src={klecany} alt="" className="card-img-top cover" width="100%" height="225" role="img"
                                focusable="false" />
                            <div className="card-body">
                                <h4 className="card-text">Last shot Klecany</h4>
                                <p className="card-text">25.6.2023 - se konala poslední hra v areáli Klecany.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Pripravujeme</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Events