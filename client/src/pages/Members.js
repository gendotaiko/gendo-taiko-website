import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

import PastMember from '../components/PastMember';
import CurrentMember from '../components/CurrentMember';

const currGenList = [
	{ english: 'SIXTEENTH', japanese: '', members: [{ name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }] },
	{ english: 'FIFTEENTH', japanese: '', members: [{ name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }, { name: 'Kelvin Yang', year: 'Brown 21', image: 'GendoCrest.png' }] }
];

const pastGenList = [
	{ english: 'THIRTEENTH', japanese: '十三代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
	{ english: 'TWELFTH', japanese: '十二代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
	{ english: 'ELEVENTH', japanese: '十一代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
	{ english: 'TENTH', japanese: '十代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
	{ english: 'NINTH', japanese: '九代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
	{ english: 'EIGHTH', japanese: '八代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] },
	{ english: 'NINTH', japanese: '七代目', members: [{ name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }, { name: 'Kelvin Yang', year: 'Brown 21' }] }
];

const Members = () => {
	return (
		<div>
			<Typography variant='h1'>CURRENT MEMBERS</Typography>
			<Box p={8} alignItems='center'>
				
				{/* <div> {currGenList.map((gen, index) => (

				))} */}
				{/* <ImageList cols={4}>
					{currGenList[0].members.map((member, index) => (
						<ImageListItem key={index}>
							<img
								src={process.env.PUBLIC_URL + '/images/' + member.image}
							/>
							<ImageListItemBar
								title={member.name}
								subtitle={member.year}
								position='below'
							/>
						</ImageListItem>
					))}
				</ImageList> */}
				{/* </div> */}


				<Grid container spacing={2}>
					{
						currGenList.map((gen, index) =>
							<div key={index}>
								<Typography variant='current'>{gen.english} GENERATION {gen.japanese}</Typography>
								<Grid item xs={4} lg={2}>
									<CurrentMember members={gen.members} />
								</Grid>
							</div>
						)
					}
				</Grid>
			</Box>
			<Typography variant='h1'>PAST MEMBERS</Typography>
			<Box display='flex' p={8} alignItems='center' flexDirection='column'>
				<Grid container spacing={2}>
					{
						// web: 4 -> lg={3}
						// mobile: 2 -> xs={6}
						pastGenList.map((gen, index) =>
							<Grid item key={index} xs={6} lg={3}>
								<PastMember english={gen.english} japanese={gen.japanese} members={gen.members} />
							</Grid>
						)
					}
				</Grid>
			</Box>
		</div>
	);
};

export default Members;