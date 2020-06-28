// prettier-ignore
// Dark Mode
/* ------------------------------- */
document.addEventListener('keydown', (event) => {
	if (event.keyCode === 68) {
		document.body.classList.toggle('dark-mode');
	}
});

// Job Offers
/* ------------------------------- */
// prettier-ignore
// const jobOffers = [{
// 		"id": 1,
// 		"company": "Photosnap",
// 		"logo": "./images/photosnap.svg",
// 		"new": true,
// 		"featured": true,
// 		"position": "Senior Frontend Developer",
// 		"role": "Frontend",
// 		"level": "Senior",
// 		"postedAt": "1d ago",
// 		"contract": "Full Time",
// 		"location": "USA Only",
// 		"languages": ["HTML", "CSS", "JavaScript"]
// 	},
// 	{
// 		"id": 2,
// 		"company": "Manage",
// 		"logo": "./images/manage.svg",
// 		"new": true,
// 		"featured": true,
// 		"position": "Fullstack Developer",
// 		"role": "Fullstack",
// 		"level": "Midweight",
// 		"postedAt": "1d ago",
// 		"contract": "Part Time",
// 		"location": "Remote",
// 		"languages": ["Python"],
// 		"tools": ["React"]
// 	},
// 	{
// 		"id": 3,
// 		"company": "Account",
// 		"logo": "./images/account.svg",
// 		"new": true,
// 		"featured": false,
// 		"position": "Junior Frontend Developer",
// 		"role": "Frontend",
// 		"level": "Junior",
// 		"postedAt": "2d ago",
// 		"contract": "Part Time",
// 		"location": "USA Only",
// 		"languages": ["JavaScript"],
// 		"tools": ["React", "Sass"]
// 	},
// 	{
// 		"id": 4,
// 		"company": "MyHome",
// 		"logo": "./images/myhome.svg",
// 		"new": false,
// 		"featured": false,
// 		"position": "Junior Frontend Developer",
// 		"role": "Frontend",
// 		"level": "Junior",
// 		"postedAt": "5d ago",
// 		"contract": "Contract",
// 		"location": "USA Only",
// 		"languages": ["CSS", "JavaScript"]
// 	},
// 	{
// 		"id": 5,
// 		"company": "Loop Studios",
// 		"logo": "./images/loop-studios.svg",
// 		"new": false,
// 		"featured": false,
// 		"position": "Software Engineer",
// 		"role": "FullStack",
// 		"level": "Midweight",
// 		"postedAt": "1w ago",
// 		"contract": "Full Time",
// 		"location": "Worldwide",
// 		"languages": ["JavaScript"],
// 		"tools": ["Ruby", "Sass"]
// 	},
// 	{
// 		"id": 6,
// 		"company": "FaceIt",
// 		"logo": "./images/faceit.svg",
// 		"new": false,
// 		"featured": false,
// 		"position": "Junior Backend Developer",
// 		"role": "Backend",
// 		"level": "Junior",
// 		"postedAt": "2w ago",
// 		"contract": "Full Time",
// 		"location": "UK Only",
// 		"tools": ["RoR"]
// 	},
// 	{
// 		"id": 7,
// 		"company": "Shortly",
// 		"logo": "./images/shortly.svg",
// 		"new": false,
// 		"featured": false,
// 		"position": "Junior Developer",
// 		"role": "Frontend",
// 		"level": "Junior",
// 		"postedAt": "2w ago",
// 		"contract": "Full Time",
// 		"location": "Worldwide",
// 		"languages": ["HTML", "JavaScript"],
// 		"tools": ["Sass"]
// 	},
// 	{
// 		"id": 8,
// 		"company": "Insure",
// 		"logo": "./images/insure.svg",
// 		"new": false,
// 		"featured": false,
// 		"position": "Junior Frontend Developer",
// 		"role": "Frontend",
// 		"level": "Junior",
// 		"postedAt": "2w ago",
// 		"contract": "Full Time",
// 		"location": "USA Only",
// 		"languages": ["JavaScript"],
// 		"tools": ["Vue, Sass"]
// 	},
// 	{
// 		"id": 9,
// 		"company": "Eyecam Co.",
// 		"logo": "./images/eyecam-co.svg",
// 		"new": false,
// 		"featured": false,
// 		"position": "Full Stack Engineer",
// 		"role": "Fullstack",
// 		"level": "Midweight",
// 		"postedAt": "3w ago",
// 		"contract": "Full Time",
// 		"location": "Worldwide",
// 		"languages": ["JavaScript", "Python"],
// 		"tools": ["Django"]
// 	},
// 	{
// 		"id": 10,
// 		"company": "The Air Filter Company",
// 		"logo": "./images/the-air-filter-company.svg",
// 		"new": false,
// 		"featured": false,
// 		"position": "Front-end Dev",
// 		"role": "Frontend",
// 		"level": "Junior",
// 		"postedAt": "1mo ago",
// 		"contract": "Part Time",
// 		"location": "Worldwide",
// 		"languages": ["JavaScript"],
// 		"tools": ["React", "Sass"]
// 	}
// ];
// prettier-ignore

// prettier-ignore
const createTag = (tag) => {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(tag));
	return li;
}
// prettier-ignore
const createNewOffer = (offer) => {
	const blockJobOffer = document.createElement('div');
	const jobOffer = document.createElement('div');
	const jobOfferDetails = document.createElement('div');
	const companyName = document.createElement('p');

	const companyImage = document.createElement('div');

	blockJobOffer.className = `b-job-offer ${offer.featured ? "b-job-offer--featured" : ""} `;
	jobOffer.className = 'job-offer';
	companyName.className = "company-name";
	jobOfferDetails.className = "job-offer__details";
	companyName.appendChild(document.createTextNode(offer.company));

	//	Adding elements in the Offer Header
	const detailsHeader = document.createElement('div');
	detailsHeader.className = "details__header";
	detailsHeader.appendChild(companyName);
	if (offer.new) {
		const flagNew = document.createElement('p');
		flagNew.className = "flag--new";
		flagNew.appendChild(document.createTextNode("NEW"));
		detailsHeader.appendChild(flagNew);
	}
	if (offer.featured) {
		const flagFeatured = document.createElement('p');
		flagFeatured.className = "flag--featured";
		flagFeatured.appendChild(document.createTextNode("FEATURED"));
		detailsHeader.appendChild(flagFeatured);
	}
	// jobOfferDetails.appendChild(detailsHeader);


	// Adding the position
	const position = document.createElement('h2');
	position.className = "job-title";
	position.appendChild(document.createTextNode(offer.position));

	companyImage.className = "company-image";
	const img = document.createElement('img');
	img.setAttribute('src', `../src/assets/${offer.logo}`);
	companyImage.appendChild(img);
	companyImage.appendChild(img);
	jobOffer.appendChild(companyImage);
	// jobOfferDetails.appendChild(position);

	// Adding Bottom Details
	const bottomDetails = document.createElement('div');
	bottomDetails.className = "b-details";
	const timeSince = document.createElement('span');
	const contract = document.createElement('span');
	const region = document.createElement('span');
	timeSince.className = "e-time-since";
	contract.className = "contract-type";
	region.className = "region";
	timeSince.appendChild(document.createTextNode(offer.postedAt));
	contract.appendChild(document.createTextNode(offer.contract));
	region.appendChild(document.createTextNode(offer.location));
	bottomDetails.append(timeSince, "•", contract, "•", region);
	jobOfferDetails.append(detailsHeader, position, bottomDetails);

	// Adding tags
	const tags = document.createElement('ul');
	tags.className = "job-tags";
	tags.append(createTag(offer.role), createTag(offer.level));
	if (typeof offer.languages !== "undefined") {
		offer.languages.forEach((language) => {
			tags.appendChild(createTag(language));
		})
	}
	if (typeof offer.tools !== "undefined") {
		offer.tools.forEach((e) => {
			tags.appendChild(createTag(e));
		})
	}


	jobOffer.appendChild(jobOfferDetails);
	blockJobOffer.append(jobOffer, tags);

	// const jobTags = document.createElement('ul');
	const wrapper = document.querySelector(".b-offer-wrapper");
	wrapper.appendChild(blockJobOffer);
}

// jobOffers.forEach(createNewOffer);
// prettier-ignore
fetch('./dist/js/data.json')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
		data.forEach(createNewOffer);
	})
	.catch((err) => {
		console.log("hey error", err);
		// Do something for an error here
	});