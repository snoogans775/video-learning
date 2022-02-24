import { configureStore } from '@reduxjs/toolkit';
import { lessons } from './resources/lessons';
import { videos } from './resources/videos';
import { podcasts } from './resources/podcasts';
import { mediaApi } from './services/api';

export const store = configureStore({
  reducer: {
    [mediaApi.reducerPath]: mediaApi,
    lessons: lessons.reducer,
    videos: videos.reducer,
    podcasts: podcasts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mediaApi.middleware),
});