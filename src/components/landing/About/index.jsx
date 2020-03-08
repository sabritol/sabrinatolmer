import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container } from 'Common'
import Truelove from 'Static/illustrations/truelove.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const About = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={Truelove} alt="Digital Nomad" />
			</Thumbnail>
			<Details>
				<h2>Engineering beyond the box  </h2>
				<p>
				I do have extensive experience in the creative industry, 
				having devoted most of my career to dance and digital art. 
				As a result, I have developed a solid knowledge of software engineering oriented to computer vision and interactive technologies{' '}
				</p>
				<p>
				I am passionate about UX/UI, animated interfaces, game Applications and augmented platforms.
				</p>
				<p>
				I'm also an AI / Deep Learning, enthusiastic researcher. Adversarial Learning for video, tex and image generation with models 
				like Big GAN, pix2pix, vid2vid, GPT-2 and tensorflow.js lib. are my current lab.
				</p>
				<p />
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
