import React,  { useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { fetchVideos, selectData as selectVideos } from '../../app/resources/videos';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../Hero';
import { MainContainer, VideoHome } from '../../styles/Components';
import { toHHMMSS } from '../../utils/formatSeconds';

export default function LessonHomeComponent(props) {
    const dispatch = useDispatch();
    const videos = useSelector(selectVideos);
    useEffect( () => {
        if( videos.length == 0 ) dispatch(fetchVideos());
    });

    function VideoCatalog() {
        return videos.map( video => {
            const {id, title, description, previewUrl, dateCreated, length, type, topics } = video;
            return (
                <Link to={`/video/${id}`}>
                    <div key={id} className='video-home-item'>
                        <span className="preview-img">
                            <img src={previewUrl} alt='video' />
                        </span>
                        <span>
                            <h3 className="section-title">{title}</h3>
                            <p>Length: {toHHMMSS(length)}</p>
                        </span>
                    </div>
                </Link>
            );
        });
    }
    
    return (<>
        <Breadcrumbs />
        <Hero text='All Videos' disableImage></Hero>
            <VideoHome>
                {videos && VideoCatalog()}
            </VideoHome>
    </>)
}