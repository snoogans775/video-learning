import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import SubMenu from './LessonSubMenu.js';
import { LessonView, VideoView } from '../../styles/Components';
import Breadcrumbs from '../Breadcrumbs';
import VideoTray from './VideoTray';
import { useParams, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLessons, selectState as selectLessons, setCurrent } from '../../app/resources/lessons';
import { selectData } from '../../app/resources/lessons';

export default function LessonViewComponent(props) {
    const [currentVideoId, setCurrentVideoId] = useState(-1);
    const dispatch = useDispatch();
    const params = useParams();
    const lesson = useSelector(selectData).find(l => l.id == params.id);

    useEffect( () => {
        window.scrollTo({top: 0});
        if( lesson == undefined) dispatch(fetchLessons());
    }, []);

    function VideoSelected() {
        // Default to intro video, find video by id otherwise
        const video = currentVideoId == -1 ? lesson?.introVideo : lesson?.videos.find(v => v.id == currentVideoId);
        const { id, previewUrl, videoUrl } = video;
        return (            
        <div className="lesson-main">
            <VideoView>
                <div className="lesson-video">
                    <video key={id} controls poster={previewUrl} preload="metadata">
                        <source src={videoUrl} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
            </VideoView>
            <h2>{video.title}</h2>
            <h3>{video.description}</h3>
            <SubMenu lesson={lesson} />
        </div>
        )
    } 
    if( lesson == undefined ) return <Loader />;
    return (
        <>
            <Breadcrumbs />
            <LessonView>
                {VideoSelected()}
                <VideoTray videos={lesson.videos} setCurrentVideoId={setCurrentVideoId}/>
            </LessonView>
        </>
    )
}