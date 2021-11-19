import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Video from './components/Video';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Tools />
            <Video />
        </div>
    )
}

export default LandingPage
