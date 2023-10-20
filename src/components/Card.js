import "./Card.css"



const Card = ({title = "Výchozí nadpis", description, link, cta}) => {
    return (
        <>
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary text-shadow">
                    <h4 className="my-0 fw-normal">{title}</h4>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4 shadow-sm">
                        <li>{description}</li>
                        <br/>
                            <a href={link} className="w-50 btn btn-lg btn-primary border-primary text-shadow">{cta}</a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card