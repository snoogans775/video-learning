import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import './../styles/App.scss';
import LessonViewComponent from './Lesson/LessonView';
import LessonHomeComponent from './Lesson/LessonHome';
import VideoViewComponent from './Video/VideoView';
import VideoHomeComponent from './Video/VideoHome';
import PodcastViewComponent from './Podcast/PodcastView';
import PodcastHomeComponent from './Podcast/PodcastHome';

function Main(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/lessons' component={LessonHomeComponent} />
            <Route path='/lesson/:id' component={LessonViewComponent} />
            <Route path='/videos' component={VideoHomeComponent} />
            <Route path='/video/:id' component={VideoViewComponent} />
            <Route path='/podcasts' component={PodcastHomeComponent} />
            <Route path='/podcast/:id' component={PodcastViewComponent} />
        </Switch>
    );
}



export default Main;