import styled from 'styled-components'

export const Wrapper = styled.div`
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: rigth bottom;
	background-repeat: no-repeat;
`

export const IntroWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	image position: rigth bottom;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-left: 2rem;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	}

	// p {
	// 	margin-bottom: 2.5rem;
	// 	font-size: 20pt;
	// 	font-weight: normal;
	// 	line-height: 1.3;
	// 	color: #707070;
	// }
`

export const Thumbnail = styled.div`
	flex: .5;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
		image-position: rigth bottom;
	}

	img {
		width: 100%;
		
	}
`