// Prevent scrolling
document.body.addEventListener('touchstart', function(e){  
	// allow clicks on links within the moveable area
	if($(e.target).is('a, iframe')) {
		return true;
	}
	e.preventDefault();
});


document.body.addEventListener('touchmove', function(e){ 
	e.preventDefault();
});














var json = [{
				title: 'Before 18',
				description: "High School in Dalat- Viet Nam",
				startDate: (new Date('August 31, 2006 10:29:00 pm GMT+0')),
				endDate: null
			},
			{
            title: '18 - 20 years old',
				description: "First 2 years college at HUTECH University, Ho Chi Minh City, Viet Nam",
				startDate: (new Date('December 15, 2007 00:00:00 am GMT+0')),
				endDate: null
			},
            {     title: '20 - 22 years old',
				description: "ERC Institute Singapore. BA degree in Hospitality and Tourism",
				startDate: (new Date('December 18, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: "June 2010",
				description: "Arrive in Oakland, USA",
				startDate: (new Date('June 1, 2010 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: 'USA College',
				description: "Ohlone College -Fremont,CA.",
				startDate: (new Date('July 4, 2013 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: 'Now until heaven time',
				description: "Start with bootcamp and code , code , code ^.^ ",
				startDate: (new Date('August 30, 2014 00:00:00 am GMT+0')),
				endDate: null
			}];





$("#timeline").timeCube({
	data: json,
	granularity: "year",
	startDate: new Date('August 31, 2006 10:20:00 pm GMT+0'),
	endDate: new Date('September 30, 2014 02:20:00 am GMT+0'),
	nextButton: $("#next-link"),
	previousButton: $("#prev-link"),
	showDate: false
});
