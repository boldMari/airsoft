import Icon from "./Icon";
import { useState } from "react";
import Toggle from "./Toggle";


const Limits = () => {

	const [originalValue, setOriginalValue] = useState("1,7 J");
	const [value, setValue] = useState(originalValue);
	const [toggled, setToggled] = useState(false);

	const buttonHandler = () => {
		
		// Toggle between originalValue and the updated value
		setValue(toggled ? originalValue : "3 J");
		// Toggle the state of the 'toggled' variable
		setToggled(!toggled);
	}


	return (
		<>
			<div className="container px-4 py-5" id="icon-grid">
				<h2 className="pb-2 border-bottom text-primary">Limity</h2>
			</div>
			<div>
			<Toggle onChange={buttonHandler} ></Toggle>
				<p> Změna limitů : {toggled ? "Neděle" : "Sobota"}</p>
			</div>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
				<div className="col d-flex align-items-start">
					<Icon name="ak47" title="Granade" size='2em' className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">AEG/HPA/plyn {value}</h3>
						<p>(117m/s s kuličkami 0,25g; plynovky a HPA měříme na používaném střelivu, ostatní na 0,25g).</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<Icon name="sniper" title="Sniper" size='2em' className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Opakovací pušky 𝟮 𝗝</h3>
						<p>(manuální/plynové/HPA pušky; 126m/s s kuličkami 0.25g) minimální vzdálenost pro střelbu je 𝟭𝟱 𝗺 a hráč je
							povinen mít záložní zbraň, splňující limit 1.7J.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<Icon name="pressure" title="Pressure" size='2em' className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Hráči s HPA</h3>
						<p>Povinnost si přinést vlastní zámek na regulátor, pokud jej nemají, nebudou vpuštěni do hry -
							<u>BEZ&nbsp;VÝJIMEK!</u></p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<Icon name="granade" title="Granade" size='2em' className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Granáty</h3>
						<p>Zásah granátem s obsahem kuliček je platný na vzdálenost o poloměru 3 m od místa iniciace a to jen u přímého
							zásahu.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<Icon name="knife" title="Knife" size='2em' className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Chladné zbraně</h3>
						<p>Používání gumových nožů, seker a jiných maket bodných nebo sečných zbraní je povoleno po schválení
							organizátorem, musí být bez ostrých hran a dostatečně měkčeny.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<Icon name="shield" title="Shield" size='2em' className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Taktické štíty</h3>
						<p>Musí vážit alespoň 15 kg (výjimka pro hráče mladší 15 let - štít alespoň 3 kg), nesmí být průhledný (může mít
							průhledové okénko) a nesmí přesáhnout plochu 9600 cm<sup>2</sup>.</p>
					</div>
				</div>
			</div>
			<hr className="featurette-divider"></hr>
		</>

	)
}

export default Limits