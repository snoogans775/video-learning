export const getVideosByTopic = (videos, topicId) => {
    return videos.filter( video => {
        const topicIds = video.topics.map(t => t.id);
        return topicIds.includes(topicId);
    })
}