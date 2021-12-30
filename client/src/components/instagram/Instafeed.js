import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { 
	ImageList, 
	ImageListItem, 
} from '@mui/material';

import Feed from './Feed';

import './instaFeed.css';

const Instafeed = ({ token, ...props }) => {
	const [feeds, setFeedsData] = useState([]);
	//use useRef to store the latest value of the prop without firing the effect
	const tokenProp = useRef(token);
	tokenProp.current = token;

	useEffect(() => {
		// this is to avoid memory leaks
		const abortController = new AbortController();

		async function fetchInstagramPost() {
			try {
				axios
					.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&limit=${props.limit}&access_token=${tokenProp.current}`)
					.then((resp) => {
						setFeedsData(resp.data.data);
					});
			} catch (err) {
				console.log('error', err);
			}
		}

		// manually call the fetch function 
		fetchInstagramPost();

		return () => {
			// cancel pending fetch request on component unmount
			abortController.abort();
		};
	}, [props.limit]);

	return (
		<ImageList variant='masonry' cols={2} gap={8}>
			{feeds.map((feed) => (
				<ImageListItem key={feed.id} class='container'>
					<Feed feed={feed} />
				</ImageListItem>
			))}
		</ImageList>
	);
};


Instafeed.propTypes = {
	token: PropTypes.string.isRequired,
	limit: PropTypes.number.isRequired,
};

export default Instafeed;