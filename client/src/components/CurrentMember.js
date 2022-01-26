import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

// import Image from '../components/Image';

const CurrentMember = ({ members }) => {
	return (
		<Box>
			{/* <Typography variant="current">{english} GENERATION {japanese}</Typography> */}
			{
				members ? members.map((member, index) =>
					<Box key={index}>
						{/* <Image src={process.env.PUBLIC_URL + '/images/' + member.image}></Image> */}
						<Typography>{member.name} {member.year}</Typography>
					</Box>
				) : null
			}
		</Box>
	);
};

CurrentMember.propTypes = {
	english: PropTypes.string.isRequired,
	japanese: PropTypes.string.isRequired,
	members: PropTypes.object.isRequired,
};

export default CurrentMember;