import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects, Portfolio } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Portfolio />
		<Projects />
		<Skills />
		<Contact />
	</Layout>
)
