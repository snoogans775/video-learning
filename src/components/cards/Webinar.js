import React from 'react';
import { Webinar, BouncyCard } from '../../styles/Components';
import webinarImage from '../../static/live-events.png';
import backgroundShape from '../../static/trainer-bg-shape.svg';
export default function WebinarCard({ data }) {
    return (
        <BouncyCard>
            {data.id == 2
                ? <img className="webinarImage" src={webinarImage} alt="podcast" />
                :
                <Webinar>
                    <div className="trainer-image-container">
                        <div className="trainer-bg-shape" src={backgroundShape}>
                            <img src={backgroundShape} />
                        </div>
                        <img className="trainer-image" src={data.trainerImage} alt="podcast" />
                    </div>
                    <h3>{data.title}</h3>
                    <p>{data.tagline}</p>
                </Webinar>
            }
        </BouncyCard>
    )
}