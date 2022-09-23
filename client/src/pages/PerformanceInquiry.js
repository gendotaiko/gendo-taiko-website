import React from 'react';
import { Box, Typography } from '@mui/material';

const PerformanceInquiry = () => {
	return (
		<Box px={{xs: 4, lg: 12, xl: 16}} py={{xs: 4, lg: 8}}>
			<Typography variant='h1'>PERFORMANCE INQUIRY</Typography>
			<Box p={2}>
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfO-bx_ebdKBHN--LrXliTeaWtwtPbqFy-bvkeYsdI7rnC4A/viewform?embedded=true" width="800" height="600" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
			</Box>
		</Box>
	);
};

export default PerformanceInquiry;