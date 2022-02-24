import React, { useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { fetchPodcasts, selectData as selectPodcasts } from '../../app/resources/podcasts';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../Hero';
import { PodcastHome } from '../../styles/Components';
import { MainContainer } from '../../styles/Components';
import { toHHMMSS } from '../../utils/formatSeconds';

export default function PodcastHomeComponent(props) {
    const dispatch = useDispatch();
    const podcasts = useSelector(selectPodcasts);
    useEffect(() => {
        if (podcasts.length == 0) dispatch(fetchPodcasts());
    }, []);

    function podcastCatalog() {
        return podcasts.map(podcast => {
            const { id, title, description, podcastUrl, length, dateCreated, type, topics } = podcast;
            return (
                <div key={id} className='podcast-home-item'>
                    <Link to={`/podcast/${id}`}>
                        <header>
                            <h3>{title}</h3>
                        </header>
                        <article>
                            <p>{description}</p>
                        </article>
                    </Link>
                    <details>
                        <p>Posted: {new Date(dateCreated).toDateString()}</p>
                        <p>Length: {toHHMMSS(length)}</p>
                    </details>
                </div>
            );
        });
    }

    return (<>
        <Hero text='All Podcasts' disableImage></Hero>
        <MainContainer>
            <Breadcrumbs />
            <PodcastHome>
                {podcasts && podcastCatalog()}
            </PodcastHome>
        </MainContainer>
    </>)
}