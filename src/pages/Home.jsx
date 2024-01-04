import React from 'react'
import Banner from '../components/layout/Banner'
import AdditionalInfo from '../components/layout/AdditionalInfo'
import Advertise from '../components/layout/Advertise'
import Newarrival from '../components/layout/Newarrival'
import Bestseller from '../components/layout/Bestseller'
import MiddleAdvertisment from '../components/layout/MiddleAdvertisment'
import Offers from '../components/layout/Offers'

const Home = () => {
  return (
    <>
      <Banner/>
      <AdditionalInfo/>
      <Advertise/>
      <Newarrival/>
      <Bestseller/>
      <MiddleAdvertisment/>
      <Offers/>
    </>
  )
}

export default Home
