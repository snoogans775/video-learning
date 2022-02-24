import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Section from './Section';
import { MainContainer } from '../styles/Components';
import Hero from './Hero';
import LessonCard from './cards/Lesson';
import PodcastCard from './cards/Podcast';
import VideoCard from './cards/Video';
import WebinarCard from './cards/Webinar';
import ResourceCard from './cards/resource';
import Loader from './Loader';

import { getVideosByTopic } from '../utils/getVideosByTopic';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLessons, selectState as selectLessons } from '../app/resources/lessons';
import { fetchVideos, selectState as selectVideos } from '../app/resources/videos';
import { fetchPodcasts, selectState as selectPodcasts } from '../app/resources/podcasts';

export default function HomeLayout(props) {
    const dispatch = useDispatch();
    const lessons = useSelector(selectLessons);
    const videos = useSelector(selectVideos);
    const podcasts = useSelector(selectPodcasts);
    let isLoading = false;

    useEffect(() => {
        dispatch(fetchLessons());
        dispatch(fetchVideos());
        dispatch(fetchPodcasts());
    },[]);
    if( isLoading ) return <Loader />;
    return (
        <>
            <Hero alt="banner" />
            <MainContainer>
                <Section>
                    <h2>Develop Skills</h2>
                    <Carousel data={lessons.data} wrapper={LessonCard} />
                </Section>
                <Section>
                    <h2>Videos for Health & Wellness</h2>
                    <Carousel 
                        data={getVideosByTopic(videos.data, 8)} 
                        wrapper={VideoCard} 
                        seeMoreRef='/videos' 
                    />
                </Section>
                <Section>
                    <h2>Listen To Recent Discussions</h2>
                    <Carousel 
                        data={podcasts.data} 
                        wrapper={PodcastCard} 
                        seeMoreRef='/podcasts' 
                    />
                </Section>
                {/* <Section>
                    <h2>Download Resources</h2>
                    <Carousel data={mockLessons()} wrapper={ResourceCard} />
                </Section> */}
            </MainContainer>
        </>
    )
}