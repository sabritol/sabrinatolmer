import React from 'react'
import Particles from "react-particles-js"
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, SocialLinks, } from 'Common'
// import Pin from 'Static/icons/pin.svg'
import { Wrapper, IntroWrapper, Details,} from './styles'
// import particlesOptions from "../../particlesjs.config.json"

export const Intro = () => (
	<>
		<Particles
			style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: -1,
			}}
			// params={
			// particlesOptions}
		/>
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hello, I'm<br /> <span style={{ fontWeight: 300, fontSize: '88%' }}>&</span> <br />Full-stack Developer</h1>
				<h4>I craft human-centered software solutions</h4>
				<SocialLinks />
				{/* <p><span>I'm available for hire </span>
					<Button as={AnchorLink} href="#contact">
					Get in touch!
					</Button>
				</p> */}
			/</Details>
		</IntroWrapper>
	</Wrapper>
				</>
)
			
