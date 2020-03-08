import styled from 'styled-components'

export const Input = styled.input`
	width: 100%;
	box-sizing: border-box;
	border: 2px solid #6c63ff;
	padding: 0.8rem 1rem;
	border-radius: 7px;
	margin-bottom: 0.5rem;
	transition: 0.3s;

	${({ error }) =>
		error &&
		`
		border-color: #DB7093;
	`}

	&::placeholder {
		color: #DB7093;
	}
`