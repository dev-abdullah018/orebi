import React from 'react'
import Container from '../components/layout/Container'
import Breadcrumb from '../components/layout/Breadcrumb'
import InputBox from '../components/layout/InputBox'
import Button from '../components/layout/Button'
import Heading from '../components/layout/Heading'

const Contact = () => {
  return (
    <Container>
        <Breadcrumb/>
        <div className='w-full sm:w-2/4'>
            <Heading title="Fill up a Form"/>
            <InputBox as="input" placeholder="Your name here" title="Name"/>
            <InputBox as="input" placeholder="Your email here" title="Email"/>
            <InputBox as="textarea" placeholder="Your message here" title="Message"/>
        </div>
        <Button title="Post"/>
    </Container>
  )
}

export default Contact