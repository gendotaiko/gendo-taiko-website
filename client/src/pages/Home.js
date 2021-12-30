import React from 'react';
import { 
	Box, 
	Grid,
	Typography, 
} from '@mui/material';

import Instafeed from '../components/instagram/Instafeed';
import coverImage from '../media/cover.jpg';
import shimeImage from '../media/taiko2019_promo_15.jpg';
import miyakeImage from '../media/taiko2019_promo_2.jpg';
import betaImage from '../media/taiko2019_promo_11.jpg';
import yataiImage from '../media/taiko2019_promo_7.jpg';
import Image from '../components/Image';

const Home = () => {
	return (
		<Box>
			<Image src={coverImage} />
			<Grid container spacing={2} px={{xs: 4, lg: 12, xl: 16}} py={{xs: 4, lg: 8}}>
				<Grid item md={7}>
					<Typography variant='h2' py={{ xs: 2 }}>Mission statement sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
				</Grid>
				<Grid item md={5}>
					<Image src={shimeImage} />
				</Grid>
			</Grid>
			<Box px={{xs: 4, lg: 12, xl: 16}}>
				<hr style={{ color: 'white' }}/>
			</Box>
			<Grid container spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}} py={{xs: 4, lg: 8}}>
				<Grid item md={6}>
					<Instafeed token={process.env.REACT_APP_INSTAGRAM_TOKEN} limit={4} />
					<Typography variant='h2' py={{ xs: 2 }}>Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.</Typography>
					<Typography variant='body1' py={{ xs: 4 }}>Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. See more photos and videos of our performances here.</Typography>
					<Image src={betaImage} />
				</Grid>
				<Grid item md={6}>
					<Typography variant='h2' py={{ xs: 2 }}>We perform eget arcu dictum varius duis at consectetur</Typography>
					<Typography variant='body1' pb={{ xs: 4 }}>Eget arcu dictum varius duis at consectetur. Amet nisl suscipit adipiscing bibendum est ultricies. Learn more about our upcoming and past events.</Typography>
					<Image src={miyakeImage} />
					<Typography variant='h2' py={{ xs: 2 }}>Gendo Taiko is made up of students who attend Brown University and the Rhode Island School of Design</Typography>
					<Typography variant='body1' pb={{ xs: 4 }}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Learn more about our groups history and what taiko is all about here.</Typography>
					<Image src={yataiImage} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;