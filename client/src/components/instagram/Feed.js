import React from 'react';
import PropTypes from 'prop-types';

const Feed = (props) => {
	const { id, caption, media_type, media_url, permalink } = props.feed;
	let post;

	switch (media_type) {
	case 'VIDEO':
		post = (
			<a href={permalink} target='_blank' rel='noreferrer'>
				<video
					width='100%'
					height='auto'
					style={{ objectFit: 'cover '}}
					src={media_url}
					type="video/mp4"
					controls playsinline>
				</video>
			</a>
		);
		break;
	case 'CAROUSEL_ALBUM':
		post = (
			<a href={permalink} target='_blank' rel='noreferrer'>
				<img
					width='100%'
					height='auto'
					style={{ objectFit: 'cover '}}
					id={id}					
					src={media_url}
					alt={caption}
				/>
			</a>
		);
		break;
	default:
		post = (
			<a href={permalink} target='_blank' rel='noreferrer'>
				<img
					width='100%'
					height='auto'
					style={{ objectFit: 'cover '}}
					id={id}
					src={media_url}
					alt={caption}
				/>
			</a>
		);
	}

	return (
		<React.Fragment>
			{post}
		</React.Fragment>
	);
};

Feed.propTypes = {
	feed: PropTypes.object.isRequired,
};

export default Feed;