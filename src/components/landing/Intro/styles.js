import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-color: white;
	background-size: contain;
	background-position: right top;
	background-repeat: no-repeat;
`

export const IntroWrapper = styled.div`
	padding: 2rem 0 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
		padding: 1rem 0;
	}
`

export const Details = styled.div`
	flex: 1.3;
	text-align: center;
	margin: 1rem;
	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		line-height: 1;
		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 24pt;
		font-weight: 300;

		@media (max-width: 680px) {
			font-size: 26pt;
		}
	}
`
export const ProfilePicture = styled.div`
	width: 100;
	height: auto;
	img.profile-pic {
		width: 100%;
		height: auto;
		border-radius: 50%;
		max-width: 220px;
		max-height: 220px
		box-shadow:
		0 2px 2px 0 rgba(0, 0, 0, 0.14), 
		0 3px 1px -2px rgba(0, 0, 0, 0.2), 
		0 1px 5px 0 rgba(0, 0, 0, 0.12);
	}

`
export const Profile = styled.div`
	flex: .7;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 2rem .5rem;
	border-radius: 6px;
	background-color: white;
	box-shadow:
			0 2px 2px 0 rgba(0, 0, 0, 0.14), 
			0 3px 1px -2px rgba(0, 0, 0, 0.2), 
			0 1px 5px 0 rgba(0, 0, 0, 0.12);

	h4 {
		margin-bottom: 1rem;
	}
	p {
		font-size: 11pt;
		margin: 1rem 0 0;
		line-height: 1.3;
	}

	p.has-border {
		border: solid 1px #a432ce;
		padding: .5rem;
		border-radius: 6px;
	}

	@media (max-width: 960px) {
		width: 100%;
	}
`
