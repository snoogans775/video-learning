import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';
import Loader from './components/Loader';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';
import { colors as theme } from './styles/colors';
import { ThemeProvider } from 'styled-components';

const basename = process.env.NODE_ENV == 'production' ? '/' : '/';

ReactDOM.render(
  <ThemeProvider theme={theme} >
    <Suspense fallback={Loader}>
      <ReduxProvider store={store}>
        <HashRouter basename={basename}>
          <Main />
        </HashRouter>
      </ReduxProvider>
    </Suspense>
  </ThemeProvider>
  ,
  document.getElementById('root')
);
