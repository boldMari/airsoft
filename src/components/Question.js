import styled from 'styled-components';
import { useState } from "react"

const OneQuestion = styled.div`
	box-shadow: 0px 0px 10px #fddb51;
	width: 800px;
	margin-bottom: 20px;
	padding: 10px;

	& section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	& h2 {
		font-weight: 400;
		letter-spacing: 1px;
		margin-left: 50px;
	}

	& button {
		height: 40px;
		margin-right: 50px;
		color: white;
		background-color: #fddb51;
		padding: 5px 10px;
		font-size: 18px;
		cursor: pointer;
	}

	& p {
		margin: 20px 10px;
	}

`;

const Question = ({ title, info }) => {

	const [show, setShow] = useState(false)

	return (
		<>
			<OneQuestion>
				<section>
					<h2>{title}</h2>
					<button onClick={() => setShow(!show)}>Odpověď</button>
				</section>
				{show && <p>{info}</p>}
			</OneQuestion>
		</>
	)
}

export default Question