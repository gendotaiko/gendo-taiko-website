import React from 'react';
import PropTypes from 'prop-types';
import {
	Link,
} from 'react-router-dom';
import { Typography } from '@mui/material';

const NavLink = (props) => {
	return (
		<Link to={props.path} style={{ textDecoration: 'none' }}>
			<Typography variant='nav' style={{ color: props.menu ? 'black' : 'white' }}>{props.text}</Typography>
		</Link>
	);
};

NavLink.propTypes = {
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	menu: PropTypes.bool.isRequired,
};

export default NavLink;