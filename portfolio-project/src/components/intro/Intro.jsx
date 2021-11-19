import './Intro.css'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1000,
            backSpeed: 60,
            strings: ['Javascript', 'React', 'Node js']
        });
    }, []);
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/react-logo.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Hasan</h1>
                    <h3>Freelance <span ref={textRef}></span> Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
