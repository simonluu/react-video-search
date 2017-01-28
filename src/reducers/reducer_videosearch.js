import { FETCH_VIDEOS, SELECT_VIDEO } from '../actions/videosearch_action';

const INITIAL_STATE = { videos: [], selectedVideo: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_VIDEOS:
		return { ...state, videos: action.payload, selectedVideo: action.payload[0] };
	case SELECT_VIDEO:
		return { ...state, selectedVideo: action.payload };
	default:
		return state;
	}
}