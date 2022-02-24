import React from 'react'
import { PodcastCard } from '../../styles/Components'
import playButton from '../../static/play-button.png'
import podcastImage from '../../static/listen-2.png'
import { useHistory } from 'react-router'
export default function PodcastCardComponent({ data }) {
    const { id, title, description, podcastUrl } = data;
    const history = useHistory();
    return (
        <PodcastCard onClick={() => history.push(`/podcast/${id}`)}>
            <header>
                <h4>{title}</h4>
            </header>
            <article>
                <p className="text">{description}</p>
            </article>
            <footer>
                <img className="btn-play" src={playButton} alt="podcast" />
            </footer>
            <img className="background" src={podcastImage} alt="background" />
        </PodcastCard>
    )
}