import styled from 'styled-components';

export const MainContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
margin: 0 auto;
max-width: 960px;
@media (max-width: 768px) {
    padding: 0 5px;
}
`;
export const BouncyCard = styled.div`
transition: transform 0.5s;
:hover {
    transform: translateY(-10px);
}
`;
export const Navbar = styled.img`
width: 100%;
`;
export const Header = styled.div`
max-width: 50%;
margin: 0 auto;
padding: 0 10%;
border-radius: 0px 0px 50px 50px;
`;
export const Hero = styled.div`
position: relative;
display: flex;
justify-content: start;
max-width: 100%;
height: 480px;
padding-left: 20%;
overflow: hidden;
background-image: url('https://844aa8d177dcf87d02fc-8f72bb99f02c2e7ec80fe67c19b57c36.ssl.cf1.rackcdn.com/newsite/test_site/lines-widea.png');
background-size: 65% 350px;
background-repeat: no-repeat;
.hero-text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: auto 0;
    max-width: 35%;
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0;
    }
}
`;

export const HeroShapes = styled.div`
position: absolute;
left: 50%; top: 0;
overflow: hidden;
width: 100%;
height: 100%;
.blue-bubble {
    position: absolute;
    top: -40px; left: 80px;
    width: 500px;
    height: 400px;
    border-radius: 300px 80px 100px 200px;
    transform: rotate(20deg);
    background: linear-gradient(50deg,
        ${props => props.theme.tccLightBlue} 10%,
        ${props => props.theme.tccDarkBlue}
    )
}
.orange-bubble {
    position: absolute;
    top: -180px; left: 180px;
    width: 800px;
    height: 1000px;
    border-radius: 180px 80px 100px 180px;
    transform: rotate(50deg);
    background: linear-gradient(200deg,
        ${props => props.theme.tccLightOrange},
        #E67446 95%
    )
}
.feature-image {
    z-index: 1;
    position: absolute;
    left : 10%;
    top: 10%;
    width: auto;
    height: 75%;
    border-radius: 55px 0px;
}
@media (max-width: 768px) {
    display: none;
}
`;
export const Carousel = styled.div`
display: flex;
justify-content: start;
width: 100%;
padding-top: 20px;
overflow: hidden;
overflow-x: scroll;
`;
export const Section = styled.div`
margin-bottom: 2rem;
max-width: 100%;
`;
export const Lesson = styled.div`
position: relative;
display: flex;
width: 26em;
height: 36em;
border: 1px ${props => props.theme.tccGray} solid;
background: #FFF;
border-radius: 15px;
padding-bottom: 1em;
margin: 0 2em 2em 0;
box-shadow: -2px 2px 4px lightgray;
overflow: hidden;
img {
    z-index: 0;
    position: absolute;
    top: 0;
    max-width: 100%;
}
.lesson-overlay {
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: 0;
    min-width: 100%;
}
.text {
    z-index: 2;
    max-width: 75%;
    margin-top: 55%;
    padding: 0 0 0 1em;
    align-self: center;
    white-space: normal;
}
.details {
    position: absolute;
    bottom: 5%;
    left: 5%;
}
`;
export const Video = styled.div`
position: relative;
height: 15em;
width: 25em;
border-radius: 20px;
margin-right: 1em;
background-color: ${props => props.theme.tccLightBlue};
overflow: hidden;
.video-description {
    position: absolute;
    top: 10%;
    left: 10%;
    max-width: 75%;
    white-space: normal;
    color: white;
    p {
        color: white !important;
    }
}
.video-length {
    position: absolute;
    bottom: 5%;
    right: 5%;
    padding: 0.5em 1em;
    border: 1px solid ${props => props.theme.tccGray};
    border-radius: 15px;
    background: linear-gradient(#FFF, #EEE);
}
/* Corner Ribbon */
::before {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom-right-radius: 120px;
    padding: 180px 180px 0 150px;
    content: '';
    height: 50%;
    width: auto;
    background: linear-gradient(90deg,
        ${props => props.theme.tccDarkOrange}, 
        ${props => props.theme.tccLightOrange}
    );
}
`;
export const PodcastCard = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 20% 60% 20%;
min-width: 15em;
min-height: 20rem;
padding: 2rem;
margin: 0 1rem 1rem 1rem;
.btn-play {
    z-index: 1;
}
.background {
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    opacity: 0.1;
}
.text {
    overflow: hidden;
}
`;
export const PodcastView = styled.div`
    display: relative;
    .podcast-main {
        p {
            max-width: 64ch;
        }
    }

`;
export const PodcastHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2em auto;
    gap: 2rem;
    h3, p {
        color: ${props => props.theme.tccGray};
    }
    p {
        font-weight: normal;
    }
    .podcast-home-item {
        display: grid;
        grid-template-rows: 90% 10%;
        padding: 2em;
        :hover {background: #EEE;}
    }
`;
export const Webinar = styled.div`
position: relative;
border: 1px solid red;
background: ${props => props.theme.tccTaupe};
background-image: url('./static/lines-widea.png');
background-size: contain;
height: 36em;
width: 60em;
margin-right: 1em;
.trainer-image-container {
    border: 1px solid green;
    position: relative;
    width: 10%;
    margin-left: 40%;
    margin-top: 2em;
    .trainer-image {
        position: absolute;
        margin-top: 2em;
        border-radius: 10em;
        height: 10em;
    }
    .trainer-bg-shape img{
        position: absolute;
        width: 19em;
        z-index: 0;
        top: 10px; left: -60px;
        height: 12em;
    }  
    #Layer_1 {
        fill: #FFF;
    } 
}
h3, p {
    margin: 0 auto;
    position: relative;
    text-align: center;
}
`;
export const Resource = styled.img`
width: 100%;
`;
export const LessonView = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
.lesson-main {
    max-width: 60%;
    margin-right: 2em;
    video {
        width: 100%;
        max-height: 50%;
    }
}
@media (max-width: 768px) {
    justify-content: flex-start;        
}
`;
export const LessonHome = styled.div`
    margin-top: 2em;
    h2 {
        min-width: 40%;
        max-width: 40%;
    }
    img {
        max-width: 300px;
        margin-right: 2em;
    }
    .lesson-home-item {
        display: flex;
        padding: 2em;
        span {
            width: 33%;
            margin-right: 2em;
        }
        span img {
            max-width: 100%;
            height: auto;
        }
        :hover {background: #CCC;}
    }
`;
export const VideoHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 2em auto;
    gap: 2rem;
    h3 {
        color: ${props => props.theme.tccGray};
    }
    img {
        max-width: 300px;
        margin-right: 2em;
    }
    .video-home-item {
        padding: 2em;
        span {
            width: 33%;
            margin-right: 2em;
        }
        .preview-img {
            aspect-ratio: 16 / 9;
        }
        :hover {background: #CCC;}
    }
`;
export const VideoView = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
.video-main {
    max-width: 60%;
    margin-left: 20%;
    video {
        max-width: 100%;
    }
}
@media (max-width: 768px) {
    justify-content: flex-start;        
}
`;
export const VideoTray = styled.div`
    max-width: 20em;
    display: flex;
    flex-flow: column;
    padding: 0 2em;
    overflow-y: scroll;
    .video-item {
        width: 100%;
        max-height: 70%;
        margin-bottom: 2em;
    }
    img {
        width: 100%;
    }
`;
export const Breadcrumbs = styled.div`
    margin-left: 2rem;
    margin-bottom: 2rem;
    max-width: 20em;
    font-size: 16px;
`;
export const SubMenu = styled.div`
    width: 100%;
    border-right: 1px solid ${props => props.theme.tccGray};
    border-left: 1px solid ${props => props.theme.tccGray};
    span {
        font-size: 2em;
        padding: 0.5em 1em;
        &.active {
            border-bottom: 5px solid ${props => props.theme.tccLightBlue};
        }
    }
`;