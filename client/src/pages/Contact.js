import React from 'react';
import { Box, Typography } from '@mui/material';

import NavLink from '../components/NavLink';

const Contact = () => {
	return (
		<Box px={{xs: 4, lg: 12, xl: 16}} py={{xs: 4, lg: 8}}>
			<Typography variant='h1'>CONTACT</Typography>
			<Box p={2}>
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfO-bx_ebdKBHN--LrXliTeaWtwtPbqFy-bvkeYsdI7rnC4A/viewform?embedded=true" width="800" height="600" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
			</Box>
			<Typography variant='current'>PERFORMANCE INQUIRY</Typography>
			<Typography>Please submit booking requests by filling out the <NavLink path='/performance-inquiry' text='submission form here.' link/></Typography>
		</Box>
	);
};

export default Contact;