import React from 'react';
import { toMinutes } from '../../utils/formatSeconds';
import { useHistory } from 'react-router-dom';
import { Video, BouncyCard } from '../../styles/Components'
export default function VideoCard({data}) {
    const history = useHistory();
    const minutes = toMinutes(data.length);
    return (
        <BouncyCard>
            <Video onClick={() => history.push(`/video/${data.id}`)}>
                <div className="video-description">
                    <h3 className="section-title">{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <div className="video-length">{minutes} Minute{minutes > 1 && 's'}</div>
            </Video>
        </BouncyCard>
    )
}