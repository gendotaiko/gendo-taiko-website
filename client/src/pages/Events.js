import React from 'react';
import { 
	Box, 
	Grid,
	Typography, 
	Switch,
	FormControlLabel,
	Collapse
	
} from '@mui/material';
import shimeImage from '../media/taiko2019_promo_15.jpg';
import Image from '../components/Image';

const Events = () => {
	{/* switch fiddling */}
	const [checked, setChecked] = React.useState(false);
	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<Box> 
			<Grid container px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* upcoming events title */}
				<Grid item>
					<Typography variant='h1' pt={{ xs: 2 }}>UPCOMING EVENTS</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* first chunk container */}
				<Grid container md={8} spacing={{xs: 2, lg: 4}} pl={{xs: 12, md: 16, lg: 20, xl: 24}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* text */}
					<Grid item md={3}>
						<Typography variant='body1' >January 42nd,2041</Typography>
					</Grid>
					<Grid item md={9}>
						<Typography variant='body1'>ECTC 2041   •  website.com 4023 Address Street Providence, Rhode Island 02969</Typography>
					</Grid>
					<Grid item md={3}>
						<Typography variant='body1'>January 42nd, 2041</Typography>
					</Grid>
					<Grid item md={9}>
						<Typography variant='body1'>ECTC 2041   •  website.com 4023 Address Street Providence, Rhode Island 02969</Typography>
					</Grid>
					<Grid item md={3}>
						<Typography variant='body1'>January 42nd, 2041</Typography>
					</Grid>
					<Grid item md={9}>
						<Typography variant='body1'>ECTC 2041   •  website.com 4023 Address Street Providence, Rhode Island 02969</Typography>
					</Grid>
					<Grid item md={3}>
						<Typography variant='body1'>January 42nd, 2041</Typography>
					</Grid>
					<Grid item md={9}>
						<Typography variant='body1'>ECTC 2041   •  website.com 4023 Address Street Providence, Rhode Island 02969</Typography>
					</Grid>
				</Grid>
				<Grid item md={4}> {/* Image that spans whole thing */}
					<Image src={shimeImage} /> {/* placeholder image */}
				</Grid>
			</Grid>
			
			<Grid container px={{xs: 4, lg: 12, xl: 16}} pb={{xs: 2, lg: 4}}> {/* past events title */}
				<Grid item>
					<Typography variant='h1' pt={{ xs: 2 }}>PAST EVENTS</Typography>
				</Grid>
			</Grid> 

			<Grid container spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* first chunk container */}
				<Grid container md={11.25} spacing={{xs: 2, lg: 4}} pl={{xs: 12, md: 16, lg: 20, xl: 24}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* text */}
					<Grid item md={2}> 
						<Typography variant='body1'>January 42nd, 2041</Typography>
					</Grid>
					<Grid item md={10}> 
						<Typography variant='body1'>ECTC 2041   •  website.com 4023 Address Street Providence, Rhode Island 02969</Typography>
						<FormControlLabel control={<Switch checked={checked} onChange={handleChange} />}label="Show More"/>
						<Collapse in={checked}>
							<Grid container spacing={{xs: 2, lg: 4}}>
								<Grid item md={8}>
									<Typography variant='body1'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Arcu dui vivamus arcu felis bibendum ut tristique et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum. Mauris in aliquam sem fringilla ut.</Typography>
								</Grid>
								<Grid item md={4}>
									<Image src={shimeImage} /> {/* placeholder image */}
								</Grid>
							</Grid>
						</Collapse>
					</Grid>
				</Grid>
			</Grid>

		</Box>	

	);
};

export default Events;