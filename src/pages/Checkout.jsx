import React from 'react'
import Breadcrumb from '../components/layout/Breadcrumb'
import Container from '../components/layout/Container'
import CheckOutFrom from '../components/layout/CheckOutFrom'

const Checkout = () => {
  return (
    <Container>
          <div className="pb-[119px]">
            <Breadcrumb title="checkout" />
            <p className="text-[#6D6D60] font-normal sm:w-[600px]">Have a coupon? Click here to enter your code</p>
          </div>
          <CheckOutFrom/>
    </Container>
  )
}

export default Checkout