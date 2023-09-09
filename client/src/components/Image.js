import { styled } from '@mui/material/styles';

const Image = styled('img')(() => ({
	height: 250,
	width: 250,
	maxHeight: '100%',
	maxWidth: '100%', 
	objectFit: 'cover'
}));

export default Image;
