import React, { useState, useEffect } from 'react';
import { VideoView } from '../../styles/Components';
import Loader from '../Loader';
import Breadcrumbs from '../Breadcrumbs';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideos, selectData } from '../../app/resources/videos';

import Nav from '../Nav';

export default function VideoViewComponent(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const video = useSelector(selectData).find(l => l.id == params.id);
    useEffect( () => {
        if( video == undefined ) dispatch(fetchVideos());
    }, []);

    if( video == undefined ) return <Loader />;
    return (
        <>
            <Breadcrumbs />
            <VideoView>
                <div className="video-main">
                    <video className="" controls preload="metadata">
                        <source src={video.videoUrl} type="video/mp4" />
                        <source src={video?.webmVideoUrl} type="video/webm" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <h2>{video.title}</h2>
                <h3>{video.description}</h3>
                </div>
            </VideoView>
        </>
    )
}