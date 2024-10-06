import { useState } from 'react'
import './App.css'
import Header from './assets/Comonents/Header/Header.jsx'
import Hero from './assets/Comonents/Hero/Hero.jsx'
import Fetured from './assets/Comonents/Fetured/Fetured.jsx'
import VideoView from './assets/Comonents/VideoView/VideoView.jsx'
import About from './assets/Comonents/About/About.jsx'
import Offers from './assets/Comonents/Offers/Offers.jsx'
import ContactUs from './assets/Comonents/ContactUs/ContactUs.jsx'
import Footer from './assets/Comonents/Footer/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
    
    <Hero/>
    <Fetured/>
    <VideoView/>
    <About/>
    <Offers/>
    <ContactUs/>    
    <Footer/>
    </>
  )
}

export default App
