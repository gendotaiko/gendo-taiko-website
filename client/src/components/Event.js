import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { 
	Grid,
	Typography, 
	Collapse,
	Link
} from '@mui/material';
import Image from '../components/Image';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';

const Event = (props) => {
	const [open, setOpen] = useState(false);

	const handleChange = () => {
		setOpen((prev) => !prev);
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
						
						<Collapse in={open}>
							<Grid container spacing={{xs: 2, lg: 4}}>
								<Grid item md={8}>
									<Typography variant='body1'> {props.details}</Typography>
								</Grid>
								<Grid item md={4}>
									<Image src={process.env.PUBLIC_URL + '/images/' + props.img} /> {/* placeholder image */}
								</Grid>
							</Grid>
						</Collapse>
						<Link component= 'button' onClick={handleChange} color= '#ffffff' variant='link'>
							{/* {open ? <ExpandLess/> : <ExpandMore/>} */}
							{open ? 'Show Less' : 'Show More'}
						</Link>
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
