import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Thumbnail>
			<h4>Interested in working together? <br /> let's get in touch.</h4>
			<img src={contact} alt="Chat" />
		</Thumbnail>
		<Details>
			<ContactForm />
		</Details>
	</Wrapper>
)
