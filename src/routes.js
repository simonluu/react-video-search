import React from 'react';
import { Route, IndexRoute } from 'react-router';

// imports main application
import App from './components/app';

import VideoSearchApp from './videosearch';

export default (
	<Route component={App}>
		<Route path="/" component={VideoSearchApp} />
		<Route path="/:term" component={VideoSearchApp} />
	</Route>
);