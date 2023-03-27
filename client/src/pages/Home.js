import React from 'react';
import { 
	Box, 
	Grid,
	Typography, 
} from '@mui/material';

import Instafeed from '../components/instagram/Instafeed';
import Image from '../components/Image';

const Home = () => {
	console.log(process.env.REACT_APP_INSTAGRAM_TOKEN);
	return (
		<Box>
			<Image src={process.env.PUBLIC_URL + '/images/home_0.jpg'} />
			<Grid container spacing={2} px={{xs: 4, lg: 12, xl: 16}} py={{xs: 4, lg: 8}}>
				<Grid item md={7}>
					<Typography variant='h2' py={{ xs: 2 }}>Gendo Taiko is a contemporary Taiko drumming ensemble centered around celebrating diasporic Asian identities. </Typography>
				</Grid>
				<Grid item md={5}>
					<Image src={'/images/home_1.jpg'} />
				</Grid>
			</Grid>
			<Box px={{xs: 4, lg: 12, xl: 16}}>
				<hr style={{ color: 'white' }}/>
			</Box>
			<Grid container spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}} py={{xs: 4, lg: 8}}>
				<Grid item md={6}>
					<Instafeed token={process.env.REACT_APP_INSTAGRAM_TOKEN} limit={4} />
					<Typography variant='h2' py={{ xs: 2 }}>The group consists of students from Brown University and the Rhode Island School of Design.</Typography>
					<Typography variant='body1' py={{ xs: 4 }}></Typography>
					<Image src={'/images/home_2.jpg'} />
				</Grid>
				<Grid item md={6}>
					<Typography variant='h2' py={{ xs: 2 }}>Gendo Taiko plays across New England for events ranging from music festivals to small gatherings.</Typography>
					<Typography variant='body1' pb={{ xs: 4 }}></Typography>
					<Image src={'/images/home_3.jpg'} />
					{/* <Typography variant='h2' py={{ xs: 2 }}>Gendo Taiko is made up of students who attend Brown University and the Rhode Island School of Design</Typography> */}
					{/* <Typography variant='body1' pb={{ xs: 4 }}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Learn more about our groups history and what taiko is all about here.</Typography> */}
					<Image src={'/images/home_4.png'} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;