import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import Skills2 from 'Static/icons/skills2.jpg'
import Ski from 'Static/icons/ski.jpg'
import { Wrapper, SkillsWrapper, SkillsColumn } from './styles'

export const Skills = () => (
	<Wrapper id="skills">
		<h2>I can help you with</h2>
		<SkillsWrapper as={Container}>
			<SkillsColumn>
			    <img src={Skills2} alt="Coding" style={{ height: '120px' }} />
				<h3>Software Development</h3>
				<p>I can deliver solutions in the shape of:</p>
				<hr />
				<ul>
					<li>Websites</li>
					<li>eCommerce</li>
					<li>Web Apps</li>
					<li>Game Apps</li>
					<li>Unity 3D</li>
					<li>Data Collection & Analysis Tools</li>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Get in touch
				</Button>
			</SkillsColumn>
			<SkillsColumn>
				<img src={Ski} alt="Coding" style={{ height: '120px' }} />
				<h3>Creative Consultancy</h3>
				<p>I can work with you and your team on:</p>
				<hr />
				<ul>
					<li>Adopting best practices for agile development</li>
					<li>Transitioning into a data-driven culture</li>
					<li>Designing Big Data pipelines</li>
					<li>Assessing technical feasibility & scalability</li>
				</ul>
				<Button className="cta" as={AnchorLink} href="#contact">
					Get in touch
				</Button>
			</SkillsColumn>
		</SkillsWrapper>
	</Wrapper>
)
