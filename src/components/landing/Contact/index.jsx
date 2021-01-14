import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.jpg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Thumbnail>
			<h4>Feel like working together?<br /> Let's get in touch.</h4>
			<img src={contact} alt="Chat" />
		</Thumbnail>
		<Details>
			<ContactForm />
		</Details>
	</Wrapper>
)
