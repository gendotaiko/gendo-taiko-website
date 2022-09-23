import React, {useState} from 'react';
import { Typography, Grid, Box, ImageList, ImageListItem, ImageListItemBar, Collapse, Link } from '@mui/material';

import PastMember from '../components/PastMember';
//import CurrentMember from '../components/CurrentMember';

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
	const [open, setOpen] = useState(false);

	const handleChange = () => {
		setOpen((prev) => !prev);
	};
	return (
		<div>
			<Grid container direction="row" px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* upcoming events title */}
				<Grid item>
					<Typography variant='h1'>CURRENT MEMBERS</Typography>
				</Grid>
				<Grid item>
					<Typography variant='body1'>*=Director/Former Director</Typography>
				</Grid>
			</Grid>
			
			<Box p={8} alignItems='center'>
				
				{/* <div> {currGenList.map((gen, index) => (
				))} */}
				<ImageList cols={4}>
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
				</ImageList>
				{/* </div> */}


				{/* <Grid container spacing={2}>
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
				</Grid> */}
			</Box>
			<Grid container direction="row" spacing={2} px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* */}
				<Grid item>
					<Typography variant='h1'>PAST MEMBERS</Typography>
				</Grid>
				<Grid item>
					<Link component= 'button' onClick={handleChange} color= '#ffffff' variant='link'>
						{/* {open ? <ExpandLess/> : <ExpandMore/>} */}
						{open ? 'Show Less' : 'Show More'}
					</Link>
				</Grid>
			</Grid>
			<Grid display='flex' p={8} alignItems='center' flexDirection='column'>
				<Collapse in={open}>
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
				</Collapse>
			</Grid>
			
		</div>
	);
};

export default Members;