import React, { useState } from 'react';
import { Button, Link, Grid } from '@material-ui/core';
import DialogWindow from '../../UI/dialogWindow/DialogWindow';
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const RightSection = (props) => {
	const [open, setOpen] = useState(false);
	let history = useHistory();
	const handleClickOpen = () => {
		console.log('this is props in rightsection: ', props);
		if (props.isAuthenticated) {
			history.push('/home');
		} else {
			setOpen(true);
		}
	};

	const handleClose = (value) => {
		setOpen(false);
	};
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item>
					<Button>
						<Link
							component={RouterLink}
							to='/about'
							underline='hover'
							style={{ color: 'black' }}>
							About
						</Link>
					</Button>
				</Grid>
				{props.isAuthenticated ? (
					<Grid item>
						<Button>
							<Link
								component={RouterLink}
								to='/create-event'
								underline='hover'
								style={{ color: 'black' }}>
								Create Event
							</Link>
						</Button>
					</Grid>
				) : null}
				{props.isAuthenticated ? (
					<Grid item>
						<Button>
							<Link
								component={RouterLink}
								to='/post-blog'
								underline='hover'
								style={{ color: 'black' }}>
								Post A Blog
							</Link>
						</Button>
					</Grid>
				) : null}

				<Grid item>
					<Button
						// variant='button'
						// align='center'
						style={{ background: 'white', color: 'black', fontSize: '0.7rem' }}
						color='inherit'
						onClick={handleClickOpen}>
						LAUNCH DEVBOPS
					</Button>
				</Grid>
			</Grid>

			<DialogWindow open={open} handleClose={handleClose} dialogTitle='Login' />
		</div>
	);
};

export default RightSection;
