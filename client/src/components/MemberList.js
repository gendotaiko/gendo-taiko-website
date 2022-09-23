import React from 'react';
import { AppBar, Box, Typography } from '@mui/material';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MemberList = () => {
	return (
		<AppBar position='static'>
			<Box display='flex' p={8} alignItems='center' flexDirection='column'>
				<Typography variant='footer' pb={2}>CONTACT US</Typography>
				<Box pb={2}>
					<a href='https://www.instagram.com/gendotaiko/'>
						<FontAwesomeIcon icon={faInstagram} size='2x' style={{ color: 'white' }}/>
					</a>
					<a href='https://www.facebook.com/gendotaiko/'>
						<FontAwesomeIcon icon={faFacebook} size='2x' style={{ color: 'white' }}/>
					</a>
					<a href='https://www.youtube.com/channel/UCVY_EyNbypUi5v1kXF09GOQ'>
						<FontAwesomeIcon icon={faYoutube} size='2x' style={{ color: 'white' }}/>
					</a>
				</Box>
				<Typography variant='footer'>GENDO TAIKO</Typography>
				<Typography variant='footer' pb={2}>INFO@GENDOTAIKO.COM</Typography>
				<Typography variant='footer'>©2022 Gendo Taiko</Typography>
			</Box>
		</AppBar>
	);
};

export default MemberList;