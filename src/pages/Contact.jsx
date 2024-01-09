import React from 'react'
import Container from '../components/layout/Container'
import Breadcrumb from '../components/layout/Breadcrumb'
import InputBox from '../components/layout/InputBox'
import Button from '../components/layout/Button'

const Contact = () => {
  return (
    <Container>
        <Breadcrumb/>
        <div className='w-full sm:w-2/4'>
            <h2 className='font-dm font-bold text-4xl mb-10'>Fill up a Form</h2>
            <InputBox as="input" placeholder="Your name here" title="Name"/>
            <InputBox as="input" placeholder="Your email here" title="Email"/>
            <InputBox as="textarea" placeholder="Your message here" title="Message"/>
        </div>
        <Button title="Post"/>
    </Container>
  )
}

export default Contact