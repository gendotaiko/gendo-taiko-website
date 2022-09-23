import React from 'react';
import { Typography, ImageList, ImageListItem, Box, Grid } from '@mui/material';

const Media = () => {
	var listOfImages = [];

	function importAll(r) {
		return r.keys().map(r);
	}

	listOfImages = importAll(require.context('/public/images/', false, /\.(png|jpe?g|svg)$/));

	return (
		<Box sx={{ padding : '100px', display: 'flex'}}>
			<Typography variant='h1'>MEDIA</Typography>
			<Grid container px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>	
				<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
					{listOfImages.map((image) => (
						<ImageListItem key={image.img}>
							<img
								src={image}
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Grid>	
		</Box>
	);
};

export default Media; 