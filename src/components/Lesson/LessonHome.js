import React,  { useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { toHHMMSS } from '../../utils/formatSeconds';
import { fetchLessons, selectData as selectLessons } from '../../app/resources/lessons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import { MainContainer, LessonHome } from '../../styles/Components';

export default function LessonHomeComponent(props) {
    const dispatch = useDispatch();
    const lessons = useSelector(selectLessons);
    useEffect( () => {
        if( lessons.length == 0 ) dispatch(fetchLessons());
    });

    function sumVideoLength(videos) {
        const lengths = videos.map(v=>v.length);
        const totalLength = lengths.reduce((a,b) => Number(a) + Number(b), 0);
        return toHHMMSS(totalLength);
    }

    function LessonCatalog() {
        return lessons.map( lesson => {
            const {id, title, description, imageUrl, dateCreated, type, videos } = lesson;
            return (
                <Link to={`/lesson/${id}`}>
                    <div key={id} className='lesson-home-item'>
                        <span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </span>
                        <span>
                            <img src={imageUrl} alt='lesson' />
                        </span>
                        <span>
                            <p>Number of Videos: {videos.length}</p>
                            <p>Total Length: {sumVideoLength(videos)}</p>
                        </span>
                    </div>
                </Link>
            );
        });
    }
    
    return (<>
        <Hero text='All Lessons' disableImage></Hero>
        <MainContainer>
        <Breadcrumbs />
            <LessonHome>
                {LessonCatalog()}
            </LessonHome>
        </MainContainer>
    </>)
}