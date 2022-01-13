import React from 'react';
// import useEffect from 'react';
import { 
	Box, 
	Grid,
	Typography, 
} from '@mui/material';
import eventsData from '../events.json';
import shimeImage from '../media/taiko2019_promo_15.jpg';
import Image from '../components/Image';
import Event from '../components/Event';


const Events = () => {
	const currEvents = eventsData.current_events;
	console.log(currEvents);
	const pastEvents = eventsData.past_events;
	console.log(pastEvents);
	{/* switch fiddling */} 

	return (
		<Box> 
			<Grid container px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* upcoming events title */}
				<Grid item>
					<Typography variant='h1' pt={{ xs: 2 }}>UPCOMING EVENTS</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={{xs: 8, lg: 12}} px={{xs: 4, lg: 12, xl: 16}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}> {/* first chunk container */}
				<Grid container md={8} > {/* text */}
					{currEvents.map((e) => (
						<Grid container key={e.id} spacing={{xs: 2, lg: 4}} pl={{xs: 12, md: 16, lg: 20, xl: 24}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
							<Event isCurrent={true} date ={e.date} event={e.event} details={e.details}></Event>
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
				<Grid container md={12}> {/* text */}
					{pastEvents.map((e) => (
						<Grid container key ={e.id} spacing={{xs: 2, lg: 4}} pl={{xs: 12, md: 16, lg: 20, xl: 24}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
							<Event isCurrent ={false} date ={e.date} event={e.event} details={e.details} img={e.img}></Event>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Box>	
	);
};
export default Events;