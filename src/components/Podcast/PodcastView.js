import React, { useState, useEffect } from 'react';
import { MainContainer, PodcastView } from '../../styles/Components';
import Loader from '../Loader';
import Breadcrumbs from '../Breadcrumbs';
import { DateTime } from 'luxon';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPodcasts, selectData } from '../../app/resources/podcasts';

export default function PodcastViewComponent(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const podcast = useSelector(selectData).find(l => l.id == params.id);
    useEffect(() => {
        if (podcast == undefined) dispatch(fetchPodcasts());
    }, []);

    if (podcast == undefined) return <Loader />;

    return (
        <>
            <Breadcrumbs />
            <MainContainer>
                <PodcastView>
                    <div className="podcast-main">
                        <h2>{podcast.title}</h2>
                        <p>{podcast.description}</p>
                        <audio
                            controls
                            src={podcast.podcastUrl}>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                        <p>Originally recorded on {DateTime.fromISO(podcast.dateCreated).toFormat('DDDD')}</p>
                    </div>
                </PodcastView>
            </MainContainer>
        </>
    )
}