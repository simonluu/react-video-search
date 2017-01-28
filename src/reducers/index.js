import { combineReducers } from 'redux';

import VideoReducer from './reducer_videosearch';

const rootReducer = combineReducers({
	video: VideoReducer
});

export default rootReducer;
