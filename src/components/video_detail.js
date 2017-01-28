import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Search for a Video...</div>
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return (
		<div className='video-detail col-md-8'>
			<div><h1>{video.snippet.title}</h1></div>
			
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>

			<div className="details">
				<h2>Description:</h2>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;