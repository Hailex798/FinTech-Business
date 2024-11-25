import React from 'react'
import Navbar from '../components/Navbar'
import OfferFinance from '../components/OfferFinance'
import GetStarted from '../components/GetStarted'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Payback from '../components/Payback'
import Pricing from '../components/Pricing'
import Block from '../components/Block'
import Resources from '../components/Resources'
import Footer from '../components/Footer'

const App = () => {

    // document.onscroll = function() {
    //     const specs = document.querySelector('#specs');
    //     const nav = document.querySelector('nav');
        
    //     if(specs.getBoundingClientRect().top <= 0) { // if the distance of the 'specs' section to the browser top is smaller than 0
    //       nav.classList.add('dark'); // add dark font color
    //     } else {
    //       nav.classList.remove('dark'); // remove dark  font color
    //     }
    //   }


    return (
        <div>
            <Navbar/>
            <OfferFinance/>
            <GetStarted/>
            <HowItWorks/>
            <Features/>
            <Payback/>
            <Pricing/>
            <Block/>
            <Resources/>
            <Footer/>
        </div>
    )
}

export default App
