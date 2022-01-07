import React from 'react';
import { 
	Box, 
	Grid,
	Typography, 
} from '@mui/material';
import shimeImage from '../media/taiko2019_promo_15.jpg';
import Image from '../components/Image';

const Events = () => {
	return (
		<Box>
			<Grid container px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
				<Grid item>
					<Typography variant='h1' pt={{ xs: 2 }}>UPCOMING EVENTS</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
				<Grid container md={8} spacing={{xs: 8, lg: 12}} px={{xs: 4, md: 8, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
					<Grid item md={4}>
						<Typography variant='body1' >January 42nd, 2041</Typography>
					</Grid>
					<Grid item md={8}>
						<Typography variant='body1'>ECTC 2041   •  website.com4023 Address Street Providence, Rhode Island 02969</Typography>
					</Grid>
					<Grid item md={4}>
						<Typography variant='body1'>January 42nd, 2041</Typography>
					</Grid>
					<Grid item md={8}>
						<Typography variant='body1'>ECTC 2041   •  website.com4023 Address Street Providence, Rhode Island 02969</Typography>
					</Grid>
				</Grid>
				{/* <Grid container md={8} spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}}>
					<Grid item md={4}>
						<Typography variant='body1' pb={{ xs: 2 }}>January 42nd, 2041</Typography>
					</Grid>
					<Grid item md={8}>
						<Typography variant='body1'>ECTC 2041   •  website.com4023 Address Street Providence, Rhode Island 02969</Typography>
					</Grid>
				</Grid>  */}
				<Grid item md={4}>
					<Image src={shimeImage} /> {/* placeholder image */}
				</Grid>
			</Grid>
		</Box>	
	);
};

export default Events;