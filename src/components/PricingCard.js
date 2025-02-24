import g36 from "../assets/images/g36.jpg"
import gloves from "../assets/images/gloves.png"
import carrier from "../assets/images/carrier.png"
import glasses from "../assets/images/glasses.png"
import vest from "../assets/images/vest.png"
import mask from "../assets/images/mask.png"
import overal from "../assets/images/overal.png"
import bbs from "../assets/images/bbs.png"
import co2 from "../assets/images/co2.png"
import greengas from "../assets/images/greengas.png"
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
	height: 100%;
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
  
  .contain {
    width: 100%;
    height: 250px;
	object-fit: contain;
	background-color: #fff;
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
							<div className="card-body d-flex flex-column">
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
							<div className="card-body d-flex flex-column">
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
							<div className="card-body d-flex flex-column">
								<h1 className="card-title pricing-card-title">850 Kč<small className="text-body-secondary fw-light">/10 vstupů</small></h1>
								<ul className="list-unstyled mt-3 mb-4">
									<li>10 celodenních vstupu.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<h2 className="featurette-heading fw-normal lh-1 mt-4 pb-2 border-bottom text-primary">Půjčovna</h2>

				<div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
					<div className="col">
						<div className="card shadow-sm">
							<img src={g36} className="card-img-top contain" width="100%" height="250" alt="" role="img"	focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									Půjčujeme G36c elektrickou repliku<br/>
									- baterie<br/>
									- točný zásobník na 470 kuliček
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">250 Kč/den</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm">
							<img src={gloves} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									Rukavice
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">20 Kč/den</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm">
							<img src={carrier} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									Taktická vesta
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">50 Kč/den</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm">
							<img src={glasses} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									Balistické brýle
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">10 Kč/den</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm">
							<img src={mask} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									Drátěnná maska
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">20 Kč/den</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm">
							<img src={vest} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									Reflexní vesta<br/>Záloha 40 Kč
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">10 Kč/den</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm">
							<img src={overal} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									Overal 
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">100 Kč/den</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<h2 className="featurette-heading fw-normal lh-1 mt-4 pb-2 border-bottom text-primary">Prodej</h2>
				<div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
					<div className="col">
						<div className="card shadow-sm">
							<img src={bbs} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									BLS 0.25 g / BLS 0.28 g<br/>
									1 kg balení
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">230 Kč</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm">
							<img src={co2} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									CO<sup>2</sup> bombička<br/>
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">15 Kč</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm">
							<img src={greengas} className="card-img-top contain" width="100%" height="250" alt="" role="img" focusable="false" />
							<div className="card-body d-flex flex-column">
								<p className="card-text">
									GreenGas Ultrair
								</p>
								<div className="mt-auto d-flex justify-content-end align-items-center">
									<div className="btn-group">
										<div className="border border-secondary rounded-3 text-body-secondary fs-4 px-2 py-1 btn btn-sm btn-outline-secondary">200 Kč</div>
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