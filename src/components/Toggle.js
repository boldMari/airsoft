import styled from "styled-components";

const InputWrapper = styled.label`
	position: relative;
`;

const Input = styled.input`
	// position: absolute;
	// left: -9999px;
	// top: -9999px;
	opacity: 0;
	width: 0;
	height: 0;

	&:checked + span {
		background-color: #fddb51;

		&::before {
			left: calc(100% - 2px);
			transform: translateX(-100%);
		}
	}

	&:focus + span {
		box-shadow: 0 0 0 3px rgba(0,0,0,.1);
	}
	&:focus:checked + span {
		box-shadow: 0 0 0 3px rgba(0,128,0,.1);
	}

	 `;

const Slider = styled.span`
	display: flex;
	cursor: pointer;
	width: 50px;
	height: 25px;
	border-radius: 100px;
	background-color: #bfbfbf;
	position: relative;
	transition: background-color .2s;

	&::before {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		width: 21px;
		height: 21px;
		border-radius: 100px;
		background-color: #fff;
		transition: 0.2s;
		box-shadow: 0 2px 5px rgba(0,0,0,.3);
	}
	   
	&:active:before {
		Width: 28px;
	}

	`;



const Toggle = ({ onChange }) => {


	return (
		<InputWrapper>
			<Input type="checkbox" onChange={onChange}></Input>
			<Slider></Slider>
		</InputWrapper>

	)

}

export default Toggle;