import React, { useEffect } from 'react'
import AboutDetails from './Components/AboutDetails';
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './Context'

const About = () => {

    const { updateAboutPage } = useGlobalContext();

    useEffect(() => {
        updateAboutPage();
    }, [])
    return (<>
        <HeroSection />
        <AboutDetails />
    </>)



}

export default About