import React from 'react';
import Image from '../components/Image';
import {
	Box,
	Grid,
	Typography,
} from '@mui/material';

const About = () => {
	return (
		<Box>
			<Grid container px={{ xs: 4, lg: 12, xl: 16 }} pt={{ xs: 4, lg: 8 }} pb={{ xs: 2, lg: 4 }}>
				<Grid item>
					<Typography variant='h1' pt={{ xs: 2 }}>WHAT IS GENDO TAIKO?</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={{ xs: 8, lg: 12 }} px={{ xs: 4, lg: 12, xl: 16 }}>
				<Grid item md={7.5}>
					<Typography variant='body1' pb={{ xs: 2 }}>Gendo Taiko is a contemporary Taiko drumming ensemble centered around celebrating diasporic Asian identities. Consisting of students from Brown University and the Rhode Island School of Design, the group plays across New England for events ranging from music festivals to small gatherings. </Typography>
					<Typography variant='body1' pb={{ xs: 2 }}>As one of the earliest collegiate Taiko drumming groups established on the East Coast, Gendo Taiko was founded at Brown University in the Fall of 2004 by Raiki Machida (Brown ’07) and Joshua Goldner (Brown ’05). Gendo Taiko, initially dubbed Brown Taiko, Gendo Taiko’s earliest songs came from Wadaiko Gensou (和太鼓 幻創), a semi-professional Taiko duo based in Miyagi, Japan, with whom Machida had trained extensively. In the summer of 2006, Goldner and Machida hosted Wadaiko Gensou’s members Takao Handa and Satoko Nambu at Brown University to expand the group’s repertoire, hone its members’ techniques, and build a new set of drums.</Typography>
					<Typography variant='body1' pb={{ xs: 4 }}>As the group grew in membership and developed its own unique musical styles and arrangements, it adopted a formal audition process, developed a Group Independent Study Project (GISP) to explore the history of Taiko, and is now in the course of developing a well-structured program of study for its members. Today, Gendo Taiko continues to expand its repertoire through new compositions and collaborates with the greater Taiko community by hosting and participating in annual conferences and invitationals. Gendo Taiko is proud to be located in the Providence community and seeks to continue to use its platform to celebrate the Asian diaspora.</Typography>
				
					<Typography variant='h1' pt={{ xs: 2 }} pb={{ xs: 2, lg: 4 }}>NAMING GENDO</Typography>
					<Typography variant='body1' pb={{ xs: 2 }}>Gendo Taiko is a contemporary Taiko drumming ensemble centered around celebrating diasporic Asian identities. Consisting of students from Brown University and the Rhode Island School of Design, the group plays across New England for events ranging from music festivals to small gatherings. </Typography>
					<Typography variant='body1' pb={{ xs: 2 }}>To create the name Gensou (幻創), we will first look at the word gen (幻). The word mugen (無限) means ‘limitless’ but when shortened to gen (限) would mean ‘to limit.’ To keep the same sound without altering its meaning, the gen (幻) from gensou (幻想) is used instead, utilizing its meaning of ‘imagination.’ Finally, sou (想) can be replaced with its homonym sou (創), meaning ‘to create.’</Typography>
					<Typography variant='body1' pb={{ xs: 2 }}>As we come from Wadaiko Gensou’s legacy of drumming, do (道), meaning ‘path,’ is used to create our name Gendo (幻道) as ‘Gensou’s path.’ Through the journeys of members in years past, we hope to continue passing down the experience of creative inspiration to our future members and audiences.</Typography>
				</Grid>
				<Grid item md={4}>
					<Typography variant='characters' py={{ xs: 2 }}>幻道太鼓</Typography>
					<Typography variant='body1'>gendō taiko</Typography>
					<Typography variant='characters' py={{ xs: 2 }}>和太鼓幻創</Typography>
					<Typography variant='body1'>wadaiko gensō</Typography>
				</Grid>
			</Grid>
			<Grid container px={{ xs: 4, lg: 12, xl: 16 }} pt={{ xs: 4, lg: 8 }} pb={{ xs: 2, lg: 4 }}>
				<Grid item>
					<Typography variant='h1' pt={{ xs: 2 }}>WHAT IS TAIKO?</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={{ xs: 8, lg: 12 }} px={{ xs: 4, lg: 12, xl: 16 }}>
				<Grid item md={7.5}>
					<Typography variant='body1' pb={{ xs: 8 }}>Taiko (太鼓) is the Japanese word for drums. Taiko in Japan can be traced back as early as the 6th century CE and can be linked to influences of Korean and Chinese drumming. In its earliest forms, Taiko in Japan could be found serving religious, festival, and theatrical purposes. In its evolution into Kumi-Daiko (組太鼓), ensemble Taiko drumming, Daihachi Oguchi, a jazz drummer, combined individual drums together and founded Osuwa Daiko in 1951, placing Taiko drums onto the performance stage for the first time. This radical redefinition of Taiko sparked the creation of Kumi-Daiko groups in Japan and across the Japanese diaspora in North and South America. As a performance art form that has developed alongside contemporary music and culture, Taiko has adopted a diverse range of expression and continues to evolve as more players and groups join the Taiko community.</Typography>
				</Grid>
				<Grid item md={4}>
					<Image src={process.env.PUBLIC_URL + '/images/' + 'about.jpg'} /> 
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;