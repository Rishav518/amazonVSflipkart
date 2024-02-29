import React from 'react'
import Header from '../components/header'
import Body from '../components/body'
import FaqComponent from '../components/faq'
import Footer from '../components/footer'
import Intro from '../components/intro'
import HowTo from '../components/howTo'

const Index = () => {
  return (
    <>
      <Header/>
      <Body/>
      <Intro/>
      <HowTo/>
      <FaqComponent/>
      <Footer/>
    </>
  )
}

export default Index