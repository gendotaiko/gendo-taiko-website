import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const PastMember = ({english, japanese, members}) => {
	return (
		<div>
			<Typography variant="past">{english} {japanese}</Typography>
			{
				members ? members.map((member, index) => 
					<Typography key={index}>{member.name} • {member.year}</Typography>
				) : null
			}
		</div>
	);
};

PastMember.propTypes = {
	english: PropTypes.string.isRequired, 
	japanese: PropTypes.string.isRequired, 
	members: PropTypes.object.isRequired
};

export default PastMember;
