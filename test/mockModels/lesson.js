export const lesson = {
    id: null,
    title: 'Test',
    description: 'Test',
    preview_image: 'https://844aa8d177dcf87d02fc-8f72bb99f02c2e7ec80fe67c19b57c36.ssl.cf1.rackcdn.com/assets/webinars/Robert-3.jpg',
    video_url: 'https://844aa8d177dcf87d02fc-8f72bb99f02c2e7ec80fe67c19b57c36.ssl.cf1.rackcdn.com/assets/webinars/Wellness/TCC-Bison-Breathing.mp4',
    type: 1,
    date_created: null

}

export const generateMockArray = () => {
    return new Array(10)
        .fill(lesson)
}