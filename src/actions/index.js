export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function fetchVideos(videos) {
	return {
		type: FETCH_VIDEOS,
		payload: videos
	}
}

export function setSelectedVideo(video) {
	return {
		type: SELECT_VIDEO,
		payload: video
	}
}