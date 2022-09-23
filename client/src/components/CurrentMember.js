import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import Image from '../components/Image';

const CurrentMember = ({ members }) => {
	return (
		<div style={{display:'inline'}}>
			{/* <Typography variant="current">{english} GENERATION {japanese}</Typography> */}
			{
				members ? members.map((member, index) =>
					<div key={index} style={{display:'inline'}}>
						<Image src={process.env.PUBLIC_URL + '/images/' + member.image}></Image>
						<Typography>{member.name} <br></br> {member.year}</Typography>
					</div>
				) : null
			}
		</div>
	);
};

CurrentMember.propTypes = {
	english: PropTypes.string.isRequired,
	japanese: PropTypes.string.isRequired,
	members: PropTypes.object.isRequired,
};

export default CurrentMember;