import React from 'react';
import { upperCaseToCapitalized } from '../../utils/textFormat';
import { useHistory } from 'react-router-dom';
import { Lesson, BouncyCard } from '../../styles/Components';
import courseImage from '../../static/course-1.png';
export default function LessonCard({ data, alt }) {
    const {id, title, description, imageUrl, type, topics, videos } = data;
    const history = useHistory();
    return (
        <BouncyCard>
            <Lesson onClick={() => history.push(`/lesson/${id}`)}>
                    <img className="lesson-overlay" src={courseImage} />
                    <img src={imageUrl} />
                    <div className="text">
                        <h3 className="section-title">{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="details">
                        {`${videos.length} Videos | ${upperCaseToCapitalized(type)}`}
                    </div>
            </Lesson>
        </BouncyCard>
    )
}