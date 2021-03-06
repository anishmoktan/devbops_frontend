import React from 'react';
import Carousel from 'react-elastic-carousel';
import SlideItem from './slideItem/SlideItem';

import './SlideShow.css';
import { Typography } from '@material-ui/core';

const SlideShow = (props) => {
	let items = null;
	let sectionContents = null;

	if (props.slideItems.length > 0) {
		if (!props.isEvent) {
			items = props.slideItems.map((item) => {
				return (
					<SlideItem key={item.blogName + item.UserName} {...item} {...props} />
				);
			});
		} else if (props.isEvent) {
			items = props.slideItems?.map((item) => {
				return (
					<SlideItem key={item.event_name + item.User} {...item} {...props} />
				);
			});
		}
		sectionContents = (
			<Carousel itemsToShow={4} pagination={false} enableMouseSwipe={false}>
				{items}
			</Carousel>
		);
	} else {
		if (
			props.slideItems.length === 0 &&
			props.isProfile &&
			props.isEvent &&
			props.isRsvpList
		) {
			sectionContents = (
				<Typography variant='h6'>You don't have any RSVP yet.</Typography>
			);
		} else if (
			props.slideItems.length === 0 &&
			props.isProfile &&
			props.isEvent &&
			!props.isRsvpList
		) {
			sectionContents = (
				<Typography variant='h6'>
					You haven't created any events yet.
				</Typography>
			);
		} else if (
			props.slideItems.length === 0 &&
			props.isProfile &&
			!props.isEvent &&
			!props.isRsvpList
		) {
			sectionContents = (
				<Typography variant='h6'>You haven't posted any blog yet.</Typography>
			);
		} else if (
			props.slideItems.length === 0 &&
			!props.isProfile &&
			props.isEvent &&
			!props.isRsvpList
		) {
			sectionContents = (
				<Typography variant='h6'>There is no event happening.</Typography>
			);
		} else if (
			props.slideItems.length === 0 &&
			!props.isProfile &&
			!props.isEvent &&
			!props.isRsvpList
		) {
			sectionContents = (
				<Typography variant='h6'>There is no blogs.</Typography>
			);
		}
	}

	return sectionContents;
};

export default SlideShow;
