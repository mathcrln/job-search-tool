// Dark Mode
/* ------------------------------- */
document.addEventListener('keydown', (event) => {
	if (event.keyCode === 68) {
		document.body.classList.toggle('dark-mode');
	}
});

const createTag = (tag) => {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(tag));
	return li;
};

const createNewOffer = (offer) => {
	const blockJobOffer = document.createElement('div');
	const jobOffer = document.createElement('div');
	const jobOfferDetails = document.createElement('div');
	const companyName = document.createElement('p');

	const companyImage = document.createElement('div');

	blockJobOffer.className = `b-job-offer ${offer.featured ? 'b-job-offer--featured' : ''} `;
	jobOffer.className = 'job-offer';
	companyName.className = 'company-name';
	jobOfferDetails.className = 'job-offer__details';
	companyName.appendChild(document.createTextNode(offer.company));

	//	Adding elements in the Offer Header
	const detailsHeader = document.createElement('div');
	detailsHeader.className = 'details__header';
	detailsHeader.appendChild(companyName);
	if (offer.new) {
		const flagNew = document.createElement('p');
		flagNew.className = 'flag--new';
		flagNew.appendChild(document.createTextNode('NEW'));
		detailsHeader.appendChild(flagNew);
	}
	if (offer.featured) {
		const flagFeatured = document.createElement('p');
		flagFeatured.className = 'flag--featured';
		flagFeatured.appendChild(document.createTextNode('FEATURED'));
		detailsHeader.appendChild(flagFeatured);
	}
	// jobOfferDetails.appendChild(detailsHeader);

	// Adding the position
	const position = document.createElement('h2');
	position.className = 'job-title';
	position.appendChild(document.createTextNode(offer.position));

	companyImage.className = 'company-image';
	const img = document.createElement('img');
	img.setAttribute('src', `./src/assets/${offer.logo}`);
	companyImage.appendChild(img);
	companyImage.appendChild(img);
	jobOffer.appendChild(companyImage);
	// jobOfferDetails.appendChild(position);

	// Adding Bottom Details
	const bottomDetails = document.createElement('div');
	bottomDetails.className = 'b-details';
	const timeSince = document.createElement('span');
	const contract = document.createElement('span');
	const region = document.createElement('span');
	timeSince.className = 'e-time-since';
	contract.className = 'contract-type';
	region.className = 'region';
	timeSince.appendChild(document.createTextNode(offer.postedAt));
	contract.appendChild(document.createTextNode(offer.contract));
	region.appendChild(document.createTextNode(offer.location));
	bottomDetails.append(timeSince, '•', contract, '•', region);
	jobOfferDetails.append(detailsHeader, position, bottomDetails);

	// Adding tags
	const tags = document.createElement('ul');
	tags.className = 'job-tags';
	tags.append(createTag(offer.role), createTag(offer.level));
	if (typeof offer.languages !== 'undefined') {
		offer.languages.forEach((language) => {
			tags.appendChild(createTag(language));
		});
	}
	if (typeof offer.tools !== 'undefined') {
		offer.tools.forEach((e) => {
			tags.appendChild(createTag(e));
		});
	}

	jobOffer.appendChild(jobOfferDetails);
	blockJobOffer.append(jobOffer, tags);

	// const jobTags = document.createElement('ul');
	const wrapper = document.querySelector('.b-offer-wrapper');
	wrapper.appendChild(blockJobOffer);
};

// jobOffers.forEach(createNewOffer);
fetch('https://mathcrln.github.io/job-search-tool/src/js/data.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		data.forEach(createNewOffer);
	})
	.catch((err) => {
		console.log('hey error', err);
	});
