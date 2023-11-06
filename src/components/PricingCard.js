import g36 from "../assets/images/g36.jpg"
import vest from "../assets/images/vest.png"
import bryle from "../assets/images/tacticke-ochranne-bryle.jpg"
import styled from "styled-components";

const PricingCardContainer = styled.div`
  .card {
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    transition: all 0.5s linear; /* Add transition */
    transform: scale(1);
    transform-origin: center;
	filter: blur;
  }

  .card:hover {
    transform: scale(1.04); /* Add scale transform on hover */
  }

  .card-header {
    background-color: #007BFF;
    color: #FFF;
    border: none;
    padding: 10px;
    text-align: center;
	transition: none;
  }

  .card-title {
    font-size: 2.5rem;
    font-weight: 500;
    margin: 20px 0;
  }

  .list-unstyled {
    list-style: none;
    padding: 0;
  }

  .list-unstyled li {
    margin: 10px 0;
  }
  
  .cover {
    width: 100%;
    height: 250px;
  }
`;



const PricingCard = () => {
	return (
		<PricingCardContainer>
			<div className="container">
				<h2 className="featurette-heading fw-normal lh-1 mt-4 pb-2 border-bottom text-primary">Vstupné</h2>
				<div className="row row-cols-1 row-cols-md-3 mb-3 text-center mt-5">
					
					<div className="col">
						<div className="card mb-4 rounded-3 shadow-sm border-primary">
							<div className="card-header py-3 text-bg-primary border-primary">
								<h4 className="my-0 fw-normal text-shadow">Celodenní vstup</h4>
							</div>
							<div className="card-body">
								<h1 className="card-title pricing-card-title">150 Kč<small className="text-body-secondary fw-light">/den</small></h1>
								<ul className="list-unstyled mt-3 mb-4 shadow-sm">
									<li>Hra je od 9:00 - 16:00 hod.</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card mb-4 rounded-3 shadow-sm border-primary">
							<div className="card-header py-3 text-bg-primary border-primary">
								<h4 className="my-0 fw-normal text-shadow">Půldenní vstup</h4>
							</div>
							<div className="card-body">
								<h1 className="card-title pricing-card-title">100 Kč<small className="text-body-secondary fw-light">/den</small></h1>
								<ul className="list-unstyled mt-3 mb-4">
									<li>Hra od 9:00 do 13:00 hod.</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card mb-4 rounded-3 shadow-sm border-primary">
							<div className="card-header py-3 text-bg-primary border-primary">
								<h4 className="my-0 fw-normal text-shadow">Permice</h4>
							</div>
							<div className="card-body">
								<h1 className="card-title pricing-card-title">850 Kč<small className="text-body-secondary fw-light">/10 vstupů</small></h1>
								<ul className="list-unstyled mt-3 mb-4">
									<li>10 celodenních vstupu.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<h2 className="featurette-heading fw-normal lh-1 mt-4 pb-2 border-bottom text-primary">Půjčovna</h2>
				<div className="container">

					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						<div className="col">
							<div className="card shadow-sm">
								<img src={g36} className="card-img-top cover" width="100%" height="250" alt="" role="img"
									focusable="false" />
								<div className="card-body">
									<p className="card-text">Půjčujeme G36c, co je airsoftová elektrická replika, která funguje na principu elektromotoru napájeného akumulátorem.</p>
									<div className="d-flex justify-content-end align-items-center">
										<div className="btn-group">
											<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">20 Kč/den</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<img src={vest} className="card-img-top cover" width="100%" height="250" alt="" role="img"
									focusable="false" />
								<div className="card-body">
									<p className="card-text">Každý hráč u sebe musí mít ŽLUTOU reflexní vestu pro označení jeho vyřazení ze hry. Osoby bez reflexní vesty jsou považovány za hrající hráče.</p>
									<div className="d-flex justify-content-end align-items-center">
										<div className="btn-group">
											<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">20 Kč/den</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<img src={bryle} className="card-img-top cover" alt="" width="100%" height="250" role="img" focusable="false" />
								<div className="card-body">
									<p className="card-text">Povinností nosit ochranné brýle určené pro airsoft (síťované jsou zakázané) po celou dobu pohybu v prostoru a to i mimo hru. </p>
									<div className="d-flex justify-content-end align-items-center">
										<div className="btn-group">
											<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">20 Kč/den</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		</PricingCardContainer>
	)
}

export default PricingCard