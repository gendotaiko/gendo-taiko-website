import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid} from '@mui/material';

import Image from '../components/Image';

const CurrentMember = ({ members }) => {
	return (
		<Grid container spacing={2} pb={{ xs: 2, md: 4, lg: 6 }}>
			{
				members ? members.map((member, index) =>
					<Grid item key={index} xs={12} md={4} lg={2}>
						<Image 
							alt={member.name}
							src={process.env.PUBLIC_URL + '/images/member_images/' + member.image}
						/>
						<Typography>{member.name}</Typography>
						<Typography>{member.year}</Typography>
					</Grid>
				) : null
			}
		</Grid>
	);
};

CurrentMember.propTypes = {
	english: PropTypes.string.isRequired,
	japanese: PropTypes.string.isRequired,
	members: PropTypes.object.isRequired,
};

export default CurrentMember;