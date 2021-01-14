import React from 'react'
// import Particles from "react-particles-js"
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, SocialLinks, } from 'Common'
import Truelove from 'Static/illustrations/truelove.jpg'
import { Wrapper, IntroWrapper, Details, Thumbnail} from './styles'
// import particlesOptions from "../../particlesjs.config.json"

export const Intro = () => (
	<>

	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Thumbnail>
				<img src={Truelove} alt="Presentation" />
			</Thumbnail>
			
			<Details>
				<h1>Hello, I'm Sabrina <br /> <span style={{ fontWeight: 300, fontSize: '88%' }}> </span> <br /> Artist & Full Stack Developer </h1>
				
		        
				<h4>I specialize in coming up with creative and innovative software solutions</h4>
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
			
