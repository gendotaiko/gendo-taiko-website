import React from 'react';
import { 
	Typography,
	ImageList,
	ImageListItem,
	Box,
	Container,
	Grid
} from '@mui/material';
import shimeImage from '../media/taiko2019_promo_15.jpg';
import gendoCrest from '../media/GendoCrest.png';
import miyakeImage from '../media/taiko2019_promo_2.jpg';
import betaImage from '../media/taiko2019_promo_11.jpg';
import yataiImage from '../media/taiko2019_promo_7.jpg';
import Image from '../components/Image';



const itemData = [
	{
		img: miyakeImage,
		title: 'Miyake'
	},
	{
		img: miyakeImage,
		title: 'Miyake'
	},
	{
		img: shimeImage,
		title: 'Shime'
	},
	{
		img: betaImage,
		title: 'Beta'
	},
	{
		img: yataiImage,
		title: 'GendoLogo'
	},
	{
		img: gendoCrest,
		title: 'GendoLogo'
	},
	{
		img: gendoCrest,
		title: 'GendoLogo'
	},
	{
		img: gendoCrest,
		title: 'GendoLogo'
	},
	{
		img: gendoCrest,
		title: 'GendoLogo'
	},
	{
		img: gendoCrest,
		title: 'GendoLogo'
	},
	{
		img: gendoCrest,
		title: 'GendoLogo'
	},
	{
		img: gendoCrest,
		title: 'GendoLogo'
	},
];
const Media = () => {
	return (
		<Box>
			<Grid container px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
				<Typography variant='h1'>Media</Typography>
			</Grid>
			<Container fixed>
				<ImageList px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}} sx={{overflow: 'hidden'}} cols={3}  rowHeight={'auto'} rowWidth={'auto'}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<Image
								src = {item.img}
								alt={item.title}
								loading='lazy' />
						</ImageListItem>
					))}
				</ImageList>
			</Container>
		</Box>
		
	);
};



export default Media;