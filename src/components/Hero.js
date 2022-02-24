import React from 'react';
import { Link } from 'react-router-dom';
import { Hero, Hero2, HeroShapes } from '../styles/Components';
import featureImage from '../static/hero-img.jpg';
import davidMeeLee from '../static/dml-img.jpg';
import ladyLearningImg from '../static/media-library-hero.jpg';
export default function BannerComponent({text, disableImage}) {
    return (
            <Hero>
                <div className="hero-text">
                    {!text
                    ? <><h1 className="title">We are here to keep you moving forward</h1>
                    <p className="subtitle"><Link to='/lessons'>Lessons</Link> and <Link to='/videos'>videos</Link> on topics that matter to you.</p></>
                    : <h1 className="title">{text}</h1>}
                </div>
                <HeroShapes>
                    {!disableImage && <img className="feature-image" src={ladyLearningImg}/>}
                    <div className="blue-bubble"></div>
                    <div className="orange-bubble"></div>
                </HeroShapes>
            </Hero>
    )
}