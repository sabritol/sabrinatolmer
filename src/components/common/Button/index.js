import styled from 'styled-components'

export const Button = styled.button`
	cursor: pointer;
	border-radius: 3px;
	font-weight: 400;
	ghost-button {
		display: inline-block;
		width: 200px;
		padding: 8px;
		color: #fff;
		border: 1px solid #ff6584;
		text-align: center;
		outline: none;
		text-decoration: none;
	  }
	transition: 
		box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
		transform 0.2s cubic-bezier(0.4, 0, 1, 1);
	:hover {
		box-shadow: 
			0 10px 20px rgba(0,0,0,0.19), 
			0 6px 6px rgba(0,0,0,0.23);
		transform: scale(1.03);
	}
	padding: 0.7rem 2.5rem;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: white;
	background: #ff6584;
	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		// background: white;
		// color: #8f14b;
		padding: .5rem .8rem;
	`}
`
