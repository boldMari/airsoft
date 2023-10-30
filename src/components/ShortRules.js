import helmet from "../assets/images/helmet_1920.jpg"

const ShortRules = () => {
	return (
		<>
			<div className="row featurette">
				<div className="col-md-7 order-md-2">
					<h2 className="featurette-heading fw-normal lh-1 mt-4"><span className="text-primary">PRAVIDLA NA HŘIŠTI.</span> <span
						className="text-body-secondary">Výtah z pravidel Bullet Farm.</span></h2>
					<ul className="lead bullet p-0 pt-2">
						<li>Střelba mimo hru je zakázaná. Mimo hru je zbraň zajištěna.</li>
						<li>Povinnost nosit ochranné brýle určené pro airsoft (síťované jsou zakázané) po celou dobu pohybu v prostoru a to i mimo hru. Pod 15 let povinnost celoobličejové ochrany.</li>
						<li>Střelba pouze jednotlivě (výjimky uděluje organizátor).</li>
						<li>Mrtvoly nemluví, a to ani přes vysílačku.</li>
						<li>Zakázána střelba naslepo - hráč může střílet pouze na cíle, které se nacházejí v jeho zorném poli.</li>
						<li>Střelba přes malé otvory pokud přes otvor lze prostrčit hlava NEBO hráč odstoupí cca 1,5 m od překážky.</li>
						<li>Granát platný na cca 3 m od místa iniciace, pevná překážka zásahu zamezí, hráč zvolá “překážka” a přesune se na jiné místo. Granáty si sbírá jejich majitel.</li>
						<li>Zásahy jsou platné do jakékoliv části těla nebo výstroje.</li>
						<li>Zásah do zbraně vyřazuje zasaženou zbraň, hráč zvolá “zbraň” a do návratu na mrtvoliště nesmí zasaženou
							zbraň používat.</li>
						<li>Při zasažení hráč VYTAHUJE ŽLUTOU reflexní vestu, schová ji až po návratu na mrtvoliště.</li>
						<li>ZÁKAZ demolování, přenášení, barikádování a manipulace s překážkami.</li>
					</ul>
					<div className="d-flex justify-content-end">
						<a href="#/pravidla" className="w-40 btn btn-lg btn-primary border-primary text-shadow">Kompletní pravidla</a>
					</div>
				</div>
				<div className="col-md-5 order-md-1 mt-4">
					<img src={helmet} alt="" className="featurette-image img-fluid mx-auto" width="500" height="500"
						role="img" focusable="false" />
				</div>
			</div>
		</>
	)
}

export default ShortRules