import React from 'react';
import shimeImage from '../media/taiko2019_promo_15.jpg';
import Image from '../components/Image';
import { 
	Box, 
	Grid,
	Typography, 
} from '@mui/material';

const About = () => {
	return (
		<Box>
			<Grid container px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
				<Grid item>
					<Typography variant='h1' pt={{ xs: 2 }}>WHAT IS GENDO TAIKO?</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}}>
				<Grid item md={7.5}>
					<Typography variant='body1' pb={{ xs: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Arcu dui vivamus arcu felis bibendum ut tristique et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum. Mauris in aliquam sem fringilla ut.</Typography>
					<Typography variant='body1' pb={{ xs: 2 }}>Eget arcu dictum varius duis at consectetur. Amet nisl suscipit adipiscing bibendum est ultricies. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet consectetur adipiscing elit ut aliquam purus sit. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Ac tortor dignissim convallis aenean et. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Cras semper auctor neque vitae tempus quam. Arcu felis bibendum ut tristique et. Donec pretium vulputate sapien nec sagittis aliquam malesuada.</Typography>
					<Typography variant='body1' pb={{ xs: 4 }}>Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. Cursus turpis massa tincidunt dui ut ornare. Bibendum at varius vel pharetra.</Typography>
				</Grid>
				<Grid item md={4}>
					<Typography variant='characters' py={{ xs: 2 }}>幻道太鼓</Typography>
					<Typography variant='body1'>gendō taiko</Typography>
					<Typography variant='characters' py={{ xs: 2 }}>和太鼓幻創</Typography>
					<Typography variant='body1'>wadaiko gensō</Typography>
				</Grid>
			</Grid>
			<Grid container px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
				<Grid item>
					<Typography variant='h1' pt={{ xs: 2 }}>TAIKO IN AMERICA</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}}>
				<Grid item md={7.5}>
					<Typography variant='body1' pb={{ xs: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Arcu dui vivamus arcu felis bibendum ut tristique et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum. Mauris in aliquam sem fringilla ut.</Typography>
					<Typography variant='body1' pb={{ xs: 2 }}>Eget arcu dictum varius duis at consectetur. Amet nisl suscipit adipiscing bibendum est ultricies. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet consectetur adipiscing elit ut aliquam purus sit. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Ac tortor dignissim convallis aenean et. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Cras semper auctor neque vitae tempus quam. Arcu felis bibendum ut tristique et. Donec pretium vulputate sapien nec sagittis aliquam malesuada.</Typography>
					<Typography variant='body1' pb={{ xs: 8 }}>Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. Cursus turpis massa tincidunt dui ut ornare. Bibendum at varius vel pharetra.</Typography>
				</Grid>
				<Grid item md={4}>
					<Image src={shimeImage} /> {/* placeholder image */}
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;