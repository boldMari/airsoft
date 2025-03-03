import bullet_farm_1 from "../assets/images/bullet_farm_1.jpg"
import bullet_farm_2 from "../assets/images/bullet_farm_2.jpg"
import bullet_farm_3 from "../assets/images/bullet_farm_3.jpg"
import bullet_farm_4 from "../assets/images/bullet_farm_4.jpg"
import profile from "../assets/images/profile.png"
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";

const Profile = styled.img`
	max-width: 50px;
	height: auto;
`;

const FirstTime = () => {
	return (
		<Container>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-body-tertiary">
				<div className="p-lg-5 mx-auto my-3">
					<Row>
						<Col>
							<h2 className="featurette-heading fw-normal lh-1 my-4 text-primary">Historie</h2>
						</Col>
					</Row>
					<Row className="d-flex justify-content-center align-items-center pt-3 pb-3">
						<Col md={6}>
							<p>
								Historie našeho organizačního týmu začíná v roce 2016, kdy nám bylo nabídnuto vést airsoftové hry v bývalém areálu vojenských kasáren v Klecanech. Hřiště tu již nějakou dobu nepravidelně fungovalo. Začátky nebyly snadné, bojovali jsme nejen proti sobě kuličkami, ale hlavně s nedostatkem zdrojů, zato s větším nadšením pro věc.
							</p>
						</Col>
						<Col md={6}>
							<img src={bullet_farm_1} alt="" className="featurette-image img-fluid mx-auto" width="500" />
						</Col>
					</Row>
					<Row className="d-flex justify-content-center align-items-center pt-3 pb-3">
						<Col md={6}>
							<img src={bullet_farm_2} alt="" className="featurette-image img-fluid mx-auto" width="500" />
						</Col>
						<Col md={6}>
							<p>
								Postupem času jsme ze zanedbaného prostoru dokázali vytvořit respektované hřiště oplývající mnohým komfortem pro všechny účastníky. Stovky a stovky odpracovaných hodin přinesly své ovoce ve formě zvětšujícího se věhlasu, který byl korunován úspěchem v podobě několika vítězství v kategorii Nejlepší hřiště v ČR v anketě <a href="https://airsoftshop.cz/airsoft-nej">AirsoftNej</a>. Na naše hřiště se pravidelně sjížděli jednotlivci i týmy z celé ČR. Pořádali jsme turnaje, několikrát ročně vlastní scénářové hry, prostor byl zajímavý i pro příslušníky a týmy IZS. Podařilo se nám vytvořit silné komunitní místo plné pohody a přátelské prostředí pro každého se zájmem o tento druh sportu.
							</p>
						</Col>
					</Row>
					<Row className="d-flex justify-content-center align-items-center pt-3 pb-3">
						<Col md={6}>
							<p>
								Pak přišel rok 2023 a s ním obávané rozhodnutí o konci našeho vymazleného hřiště. Majitelé kasáren našli pro „naše“ prostory jiné využití.
							</p>
							<p>
								Poslední třešničkou na Klecanském dortu, odměna za léta usilovné práce a budování onoho snu party kamarádů, se stala 25. 6. 2023 akce s názvem Last Shot. Pro mnohé byla loučením se s areálem před náročným stěhováním. Návštěvnost překonala všechna naše očekávání, s hřištěm se přišel rozloučit rekordní počet lidí, fanoušků, návštěvníků, i přátel a rodin. V ten den padl poslední výstřel v Klecanech.
							</p>
						</Col>
						<Col md={6}>
							<img src={bullet_farm_3} alt="" className="featurette-image img-fluid mx-auto" width="500" />
						</Col>
					</Row>
					<Row className="d-flex justify-content-center align-items-center pt-3 pb-3">
						<Col md={6}>
							<img src={bullet_farm_4} alt="" className="featurette-image img-fluid mx-auto" width="500" />
						</Col>
						<Col md={6}>
							<p>
								Léto 2023 bylo naplněno neutuchající činností. S náročným stěhováním do nedaleké Dynamitky Alfreda Nobela, nacházející se v malebném Drahaňském údolí, nám pomohli i mnozí z vás.
							</p>
							<p>
								Zde znovu začínáme od píky, znovu stovkami a stovkami hodin mravenčí práce pomalu přetvářet zanedbaný prostor v živé, fungující místo, epicentrum setkávání všech nadšenců a příznivců našeho milovaného sportu.
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<h2 className="featurette-heading fw-normal lh-1 my-4 text-primary">Ocenění</h2>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>Nejlepší hřiště – <a href="https://airsoftshop.cz/airsoft-nej">Airsoft Nej</a></p>
							<ul>
								<li>2019 - 2. místo</li>
								<li>2020 - 1. místo</li>
								<li>2021 - 2. místo</li>
								<li>2022 - 1. místo</li>
								<li>2023 - 1. místo</li>
							</ul>
							<p>Akce do 500 hráčů – <a href="https://airsoftshop.cz/airsoft-nej">Airsoft Nej</a></p>
							<ul>
								<li>2023 – Bagdad</li>
								<li>2024 - Stalingrad</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col>
							<h2 className="featurette-heading fw-normal lh-1 my-4 text-primary">Organizátoři</h2>
						</Col>
					</Row>
					<Row className="d-flex justify-content-left align-items-center pt-3 pb-3 row-cols-4">
						{[
							{ name: "KiJudo", role: "organizátor" },
							{ name: "Fíla", role: "organizátor" },
							{ name: "Petr", role: "organizátor" },
							{ name: "Buzz", role: "organizátor" },
							{ name: "Luke", role: "organizátor" },
							{ name: "Mára", role: "organizátor, stavitel" },
							{ name: "Onďa", role: "organizátor, stavitel, pronájmy" },
							{ name: "Čenda", role: "organizátor" },
							{ name: "Ella", role: "organizátor" },
							{ name: "Jáchym", role: "organizátor" },
							{ name: "Pepa", role: "organizátor" },
							{ name: "Mikey", role: "organizátor" },
							{ name: "Ondra", role: "organizátor" },
							{ name: "Otecko", role: "Otecko" },
							{ name: "Švadlenka", role: "organizátor" },
							{ name: "Seržant", role: "organizátor" },
							{ name: "Sal", role: "Matka pluku" }
						].map((member, index) => (
							<Col key={index} md={2} className="text-center mb-4">
								<Profile src={profile} alt={member.name} className="img-fluid rounded-circle mb-2" />
								<h5>{member.name}</h5>
								<p>{member.role}</p>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</Container>
	)
}

export default FirstTime