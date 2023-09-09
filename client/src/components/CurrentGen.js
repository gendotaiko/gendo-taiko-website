/* eslint-disable react/jsx-no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid} from '@mui/material';

import Image from './Image';

const CurrentGen = ({ members }) => {
	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
			{members.map((member, index) =>
				<Grid item key={index} xs={2} sm={4} md={4}>
					<Image alt={member.name} src={process.env.PUBLIC_URL + '/member_images/' + member.image}/>
					<Typography>{member.name} • {member.year}</Typography>
				</Grid>
			)}
		</Grid>
	);
};
// const CurrentGen = ({ members }) => {
// 	return (
// 		<Grid container>
// 			{
// 				members.map((member, index) =>
// 					<Grid item>
// 						<Typography>{member.name} • {member.year}</Typography>
// 					</Grid>
// 			}
// 		</Grid>
// 	);
// };
CurrentGen.propTypes = {
	english: PropTypes.string.isRequired,
	japanese: PropTypes.string.isRequired,
	members: PropTypes.object.isRequired,
};


export default CurrentGen;