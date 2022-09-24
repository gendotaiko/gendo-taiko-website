import React, {useState} from 'react';
import { Typography, Grid, ImageList, Collapse, Link, Box, ImageListItem, ImageListItemBar } from '@mui/material';

// import PastMember from '../components/PastMember';
//import CurrentMember from '../components/CurrentMember';

const currGenList = [
	{ english: 'FIFTEENTH', japanese: 'gen15', members: [{ name: 'Yilan Sun', year: 'RISD 21', image: 'GendoCrest.png' }]},
	{ english: 'SIXTEENTH', japanese: 'gen16', members: [{ name: 'Christianna Choe', year: 'RISD 22', image: 'GendoCrest.png' },{ name: 'Eva Lau', year: 'Brown 23', image: 'GendoCrest.png' }, { name: 'Jenny Tan', year: 'Brown 23', image: 'GendoCrest.png' }, { name: 'Jiyou Kang', year: 'RISD 23', image: 'GendoCrest.png' }, { name: 'Sam Leung', year: 'RISD 24', image: 'GendoCrest.png' }]},
	{ english: 'SEVENTEENTH', japanese: 'gen17', members: [{ name: 'Filbert Aung', year: 'Brown 24', image: 'GendoCrest.png' }, { name: 'Ford Rowe', year: 'Brown 24', image: 'GendoCrest.png' }, { name: 'Kiku Shaw', year: 'Brown 24', image: 'GendoCrest.png' }, { name: 'Rei Guo', year: 'Brown 21', image: 'GendoCrest.png' }] },
	{ english: 'EIGHTEENTH', japanese: 'gen18', members: [{ name: 'Ayaka Ono', year: 'Brown 25', image: 'GendoCrest.png'}, { name: 'Caleb Solomon', year: 'Brown 24', image: 'GendoCrest.png' }, { name: 'Emily Tom', year: 'Brown 25', image: 'GendoCrest.png' }, { name: 'Ethan Jiang', year: 'Brown 25', image: 'GendoCrest.png' }, { name: 'Jedidiah Davis', year: 'Brown 25', image: 'GendoCrest.png' }, { name: 'Joe Maffa', year: 'Brown 25', image: 'GendoCrest.png' }, { name: 'Logan Schultz', year: 'Brown 25', image: 'GendoCrest.png' }] }
	
];

const pastGenList = [
	{ english: 'FIFTEENTH', japanese: '十三代目', members: [{ name: 'Amy Lee', year: '22' }, { name: 'Charlotte Whatley', year: '22' }, { name: 'Shona O\'Bryant', year: '21' }, { name: 'Hwan Seet', year: '22' }, { name: 'Michael Chen', year: '22' }] },
	{ english: 'FOURTEENTH', japanese: '十三代目', members: [{ name: 'Kelvin Yang', year: '21' }, { name: 'Alex Alverson', year: '20' }, { name: 'Hannah Ngo', year: '21' }, { name: 'Caitlin Takeda', year: '20' }, { name: 'Jasper Johns', year: '20' }, { name: 'Jackie Lee', year: '20' }] },
	{ english: 'THIRTEENTH', japanese: '十三代目', members: [{ name: 'Makoto Kumasaka', year: '19' }, { name: 'Hayley Uno', year: 'Brown 20' }, { name: 'Jodi Scharf', year: '19' }, { name: 'Darius Diamond', year: '20' }, { name: 'Melia Okura', year: '20' }, { name: 'Kohro Shimizu', year: '20' }, { name: 'Stephanie Adaniya', year: '20' }] },
	{ english: 'TWELFTH', japanese: '十二代目', members: [{ name: 'Caroline Shen', year: '18' }, { name: 'Nabil Burias', year: '18' }, { name: 'Bharath Kayyar', year: '19' }, { name: 'Derek Hong', year: '18' }, { name: 'Diana Lin', year: '19' }, { name: 'Lina Lalwani', year: '19' },{ name: 'Jasper Miura', year: '19' }] },
	{ english: 'ELEVENTH', japanese: '十一代目', members: [{ name: 'Eric Komatsu', year: '19' }, { name: 'Nicolina', year: '4' }, { name: 'Melissa', year: '4' }, { name: 'Tristan', year: '4' }, { name: 'CJ Ormita', year: 'RISD 17' }, { name: 'Priscilla Ahn', year: 'Brown/RISD 17' }] },
	{ english: 'TENTH', japanese: '十代目', members: [{ name: 'Maggie Min', year: 'Brown 16' }, { name: 'Kota Mizutani', year: 'Brown 17' }, { name: 'Yidan Zeng', year: 'Brown/RISD 17' }, { name: 'Tyler Dae Devlin', year: 'Brown 17' }, { name: 'Marley', year: '' }, { name: 'Pauline Bagatelas', year: '17' }] },
	{ english: 'NINTH', japanese: '九代目', members: [{ name: 'Edwin Silva', year: 'Brown 16' }, { name: 'Julie Jang', year: 'Brown 16' }, { name: 'Tomi Okuno', year: 'RISD 16' }, { name: 'Manny Lopez', year: 'Brown 16' }, { name: 'Catherine (Congyuan) Luo', year: 'Brown 15' }]},
	{ english: 'EIGHTH', japanese: '八代目', members: [{ name: 'Sam Huang', year: 'Brown 14' }, { name: 'Miho Connolly', year: 'Brown 15' }, { name: 'Ryan "Frost" Fugate', year: 'Brown 15' }, { name: 'Emma Gleeman', year: 'Brown 15' }, { name: 'Joelle Chon', year: 'RISD 15' }]},
	{ english: 'SEVENTH', japanese: '七代目', members: [{ name: 'Hyerin Park', year: 'Brown 14' }, { name: 'Jessica Shimazu', year: 'RISD 14' }] }
];

const Members = () => {
	const [open, setOpen] = useState(false);

	const handleChange = () => {
		setOpen((prev) => !prev);
	};
	return (
		<Grid>
			<Grid container direction="row" px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* upcoming events title */}
				<Grid item md = {12}>
					<Typography variant='h1'>CURRENT MEMBERS</Typography>
				</Grid>
				<Grid item md = {12}>
					<Typography variant='h7'>* = Director/Former Director</Typography>
				</Grid>
			</Grid>
			<Grid container m = {5} p={8} alignItems='center'>
				<Grid item md = {12}>
					{currGenList.map((gen, index) => (
						<Box key={index}>
							<Typography key={index} variant='h2'> {gen.english} {gen.japanese}</Typography>
							<ImageList cols={gen.members.length}>
								{currGenList[index].members.map((member,index2) => (
									<ImageListItem key = {index2} >
										<img src={process.env.PUBLIC_URL + '/images/' + member.image}/>
										<ImageListItemBar title={member.name} subtitle={member.year} position='below'></ImageListItemBar>
									</ImageListItem>
								))}
							</ImageList>
						</Box>
					))}
				</Grid>
			</Grid>
			<Grid container direction='row' spacing={2} px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* */}
				<Grid item>
					<Typography variant='h1'>PAST MEMBERS</Typography>
				</Grid>
				<Grid item>
					<Link component= 'button' onClick={handleChange} color= '#ffffff' variant='link'>
						{open ? 'Show Less' : 'Show More'}
					</Link>
				</Grid>
			</Grid>
			<Grid display='flex' p={8} alignItems='center' flexDirection='column'>
				<Collapse in={open} md = {12}>
					<Grid container direction='row' cols={4} spacing={2}>
						{
							pastGenList.map((gen, index) =>
								<Grid container md={3} key={index}>
									<Grid item px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
										<Typography> {gen.english} {gen.japanese}</Typography>
										{pastGenList[index].members.map((member,index2) => (
											<Typography key = {index2}>{member.name} • {member.year}</Typography>
										// <Typography key={index2}>{member.name}</Typography>
										))}
										
									</Grid>
								</Grid>
							)
						}

					</Grid>
				</Collapse>
			</Grid>
		</Grid>
	);
};

export default Members;