import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { 
	Grid,
	Typography, 
	Switch,
	FormControlLabel,
	Collapse
} from '@mui/material';
import Image from '../components/Image';


const Event = (props) => {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	Event.propTypes = {
		date: PropTypes.any,
		event: PropTypes.any,
		isChecked: PropTypes.any,
		details: PropTypes.any,
		isCurrent: PropTypes.boolean,
		img: PropTypes.any
	};

	const createEvent = () => {
		if (props.isCurrent) {
			return (
				<Grid container spacing={{xs: 2, lg: 4}} pl={{xs: 12, md: 16, lg: 20, xl: 24}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
					<Grid item md={3}>
						<Typography variant='body1'>{props.date}</Typography>
					</Grid>
					<Grid item md={9}>
						<Typography variant='body1'>{props.event}</Typography>
					</Grid>
					<Grid item md={3}>
					</Grid>
					<Grid item md={9}>
						<Typography variant='body1'>{props.details}</Typography>
					</Grid>
				</Grid>
			);
		} else {
			return(
				<Grid container spacing={{xs: 2, lg: 4}} pl={{xs: 12, md: 16, lg: 20, xl: 24}} pt={{xs: 4, lg: 8}} pb={{xs: 2, lg: 4}}>
					<Grid item md={2}> 
						<Typography variant='body1'>{props.date}</Typography>
					</Grid>
					<Grid item md={10}> 
						<Typography variant='body1'>{props.event} </Typography>
						<FormControlLabel control={<Switch checked={checked} onChange={handleChange} />}label="Show More"/>
						<Collapse in={checked}>
							<Grid container spacing={{xs: 2, lg: 4}}>
								<Grid item md={8}>
									<Typography variant='body1'> {props.details}</Typography>
								</Grid>
								<Grid item md={4}>
									<Image src={props.img} /> {/* placeholder image */}
								</Grid>
							</Grid>
						</Collapse>
					</Grid>
				</Grid>		
			);
		}
	};
    
	return(
		<Grid md = {12}>
			{createEvent()}
		</Grid>
	);
};
export default Event;
