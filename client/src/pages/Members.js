import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

import PastMember from '../components/PastMember';
import CurrentMember from '../components/CurrentMember';
import currGenData from '../current_members.json';
import pastGenData from '../past_members.json';

const currGenList = currGenData.current_members;
const pastGenList = pastGenData.past_members;

// const pastGenList = [
// 	{ english: 'THIRTEENTH', japanese: '十三代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
// 	{ english: 'TWELFTH', japanese: '十二代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
// 	{ english: 'ELEVENTH', japanese: '十一代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
// 	{ english: 'TENTH', japanese: '十代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
// 	{ english: 'NINTH', japanese: '九代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
// 	{ english: 'EIGHTH', japanese: '八代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
// 	{ english: 'NINTH', japanese: '七代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] }
// ];

const Members = () => {
	return (
		<Box px={{ xs: 2, lg: 12, xl: 16 }} pt={{ xs: 4, lg: 8 }} pb={{ xs: 2, lg: 4 }}>
			<Typography variant='h1' pb={{ xs: 2, lg: 4 }}>CURRENT MEMBERS</Typography>
			<Box p={{ md: 8}} alignItems='center'>
				{
					currGenList.map((gen, index) => 
						<Box key={index}>
							<Typography variant='current'>{gen.english} GENERATION {gen.japanese}</Typography>
							<CurrentMember members={gen.members} />
						</Box>)
				}
			</Box>

			<Typography variant='h1'>PAST MEMBERS</Typography>
			<Box display='flex' p={8} alignItems='center' flexDirection='column'>
				<Grid container spacing={2}>
					{
						pastGenList.map((gen, index) =>
							<Grid item key={index} xs={12} md={4} lg={3}>
								<PastMember english={gen.english} japanese={gen.japanese} members={gen.members} />
							</Grid>
						)
					}
				</Grid>
			</Box>
		</Box>
	);
};

export default Members;