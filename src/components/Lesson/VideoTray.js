import React, { useState, useEffect } from 'react';
import { VideoTray } from '../../styles/Components';

export default function VideoTrayComponent({videos, setCurrentVideoId}) {
    const setNewVideo = (id) => {
        setCurrentVideoId(id);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <VideoTray>
        {videos.map( video => {
            return (
            <div key={video.id} className="video-item" onClick={() => setNewVideo(video.id)}>
                <img src={video.previewUrl} alt="video-preview" />
                <h3>{video.title}</h3>
            </div>
            )
        })}
        </VideoTray>
    )
}