import React from 'react';
// import useEffect from 'react';
import { 
	Box, 
	Grid,
	Typography, 
} from '@mui/material';
import eventsData from '../events.json';
import Event from '../components/Event';


const Events = () => {
	const currEvents = eventsData.current_events;
	const pastEvents = eventsData.past_events;

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
						<Event key ={e.id} isCurrent={true} date ={e.date} event={e.event} link ={e.link} details={e.details}></Event>
					))}
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
						<Event key ={e.id} isCurrent ={false} date ={e.date} event={e.event} details={e.details} img={e.img}></Event>
					))}
				</Grid>
			</Grid>
		</Box>	
	);
};
export default Events;