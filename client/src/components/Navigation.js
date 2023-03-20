import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';

import { AppBar, Typography, Box, IconButton, Menu, MenuItem, Grid } from '@mui/material';
import { MenuIcon } from '@icons/material';

import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Members from '../pages/Members';
import Media from '../pages/Media';
import Contact from '../pages/Contact';
import PerformanceInquiry from '../pages/PerformanceInquiry';
import NavLink from './NavLink';

const crest = process.env.PUBLIC_URL + '/images/GendoCrest.png';
asdkfjalsdkfjlaskdfjlskdjf

const pages = [['HOME', '/'], ['ABOUT', '/about'], ['EVENTS', '/events'], ['MEMBERS', '/members'], ['MEDIA', '/media'], ['CONTACT', '/contact']];

const Navigation = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Router>
			<Box p={1} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, backgroundColor: 'black', alignItems: 'center' }}>
				<IconButton
					size="large"
					aria-label="menu"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
				>
					{pages.map((page) => (
						<MenuItem key={page[0]} onClick={handleCloseNavMenu}>
							<NavLink path={page[1]} text={page[0]} menu={true} />
						</MenuItem>
					))}
				</Menu>
				<Box display='flex' alignItems='center'>
					<Typography variant='navHead' sx={{ mr: 1 }}>GENDO</Typography>
					<img src={crest} height='25px' alt='Gendo Crest' />
					<Typography variant='navHead' sx={{ ml: 1 }}>TAIKO</Typography>
				</Box>
			</Box>
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<AppBar position='static'>
					<Box display='flex' p={3} alignItems='center' justifyContent='space-around'>
						<Grid container direction='row' justifyContent='space-around' alignItems='center' maxWidth={'33%'}>
							<NavLink path='/' text='HOME' />
							<NavLink path='/about' text='ABOUT' />
							<NavLink path='/events' text='EVENTS' />
						</Grid>
						<Box>
							<Link to='/' style={{ textDecoration: 'none' }}>
								<Box display='flex' alignItems='center'>
									<Typography variant='navHead' sx={{ mr: 2 }}>GENDO</Typography>
									<img src={crest} height='25px' alt='Gendo Crest' />
									<Typography variant='navHead' sx={{ ml: 2 }}>TAIKO</Typography>
								</Box>
							</Link>
						</Box>
						<Grid container direction='row' justifyContent='space-around' alignItems='center' maxWidth={'33%'}>
							<NavLink path='/members' text='MEMBERS' />
							<NavLink path='/media' text='MEDIA' />
							<NavLink path='/contact' text='CONTACT' />
						</Grid>
					</Box>
				</AppBar>
			</Box>
			<Switch>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/events'>
					<Events />
				</Route>
				<Route path='/members'>
					<Members />
				</Route>
				<Route path='/media'>
					<Media />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/performance-inquiry'>
					<PerformanceInquiry />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default Navigation;
