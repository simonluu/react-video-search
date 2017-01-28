import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { connect } from 'react-redux';

import * as actions from './actions/videosearch_action';

import SearchBar from './components/video_search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD4Da33LjjRDBJgV4gmj631MhP0WV7RRJ4';

class VideoSearchApp extends Component {
	constructor(props) {
		super(props);
	}

	youtubeSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.props.fetchVideos(videos)
		});
	}

	render() {
		return (
			<div className='container'>
				<h1 style={{ textAlign : 'center' }}>
					<a className="header-link" href="http://simonluu.com">React Video Searcher</a>
				</h1>
				<SearchBar onSearchTermChange={(term) => this.youtubeSearch(term)} />
				<VideoDetail video={this.props.selectedVideo} />
				<VideoList
					onVideoSelect={(video) => this.props.setSelectedVideo(video)}
					videos={this.props.videos} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { videos: state.video.videos, selectedVideo: state.video.selectedVideo };
}

export default connect(mapStateToProps, actions)(VideoSearchApp);