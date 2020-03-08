import React from 'react'
import { Container, SocialLinks } from 'Common'
import { Wrapper, Flex, Details } from './styles'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h4>Sabrina Tolmer</h4>
				<span>
					© All rights reserved | {new Date().getFullYear()}
				</span>
			</Details>
			<SocialLinks />
		</Flex>
	</Wrapper>
)
