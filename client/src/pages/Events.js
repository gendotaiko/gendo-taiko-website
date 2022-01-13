import React, {useState} from 'react';
// import useEffect from 'react';
import { 
	Box, 
	Grid,
	Typography, 
	Switch,
	FormControlLabel,
	Collapse
} from '@mui/material';
import eventsData from '../events.json';
import shimeImage from '../media/taiko2019_promo_15.jpg';
import Image from '../components/Image';


const Events = () => {
	const currEvents = eventsData.current_events;
	console.log(currEvents);
	const pastEvents = eventsData.past_events;
	console.log(pastEvents);
	{/* switch fiddling */} 
	const [checked, setChecked] = useState(false);
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
				<Grid container md={8}> {/* text */}
					{currEvents.map((e) => (
						<Grid container key={e.id} spacing={{xs: 2, lg: 4}} pl={{xs: 12, md: 16, lg: 20, xl: 24}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
							<Grid item md={3}>
								<Typography variant='body1'>{e.date}</Typography>
							</Grid>
							<Grid item md={9}>
								<Typography variant='body1'>{e.event}</Typography>
							</Grid>
							<Grid item md={3}>
							</Grid>
							<Grid item md={9}>
								<Typography variant='body1'>{e.logistics}</Typography>
							</Grid>
						</Grid>
					))}
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
				<Grid container md={11.25}> {/* text */}
					{pastEvents.map((e) => (
						<Grid container key ={e.id} spacing={{xs: 2, lg: 4}} pl={{xs: 12, md: 16, lg: 20, xl: 24}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
							<Grid item md={2}> 
								<Typography variant='body1'>{e.date}</Typography>
							</Grid>
							<Grid item md={10}> 
								<Typography variant='body1'>{e.event} </Typography>
								<FormControlLabel control={<Switch checked={checked} onChange={handleChange} />}label="Show More"/>
								<Collapse in={checked}>
									<Grid container spacing={{xs: 2, lg: 4}}>
										<Grid item md={8}>
											<Typography variant='body1'> {e.details}</Typography>
										</Grid>
										<Grid item md={4}>
											<Image src={shimeImage} /> {/* placeholder image */}
										</Grid>
									</Grid>
								</Collapse>
							</Grid>
						</Grid>		
					))}
				</Grid>
			</Grid>
		</Box>	
	);
};

export default Events;