const listings = [
    {
        title: "Apartment in Downtown",
        price: "$1200",
        bedrooms: "2",
        bathrooms: "1",
        squareFeet: "800",
        availableDate: "Now",
        image: "https://via.placeholder.com/300"
    },
    {
        title: "Spacious Studio",
        price: "$900",
        bedrooms: "1",
        bathrooms: "1",
        squareFeet: "500",
        availableDate: "7/1/25",
        image: "https://via.placeholder.com/300"
    }
];

const listingsContainer = document.getElementById("listings");

listings.forEach(listing => {
    const listingElement = document.createElement("div");
    listingElement.classList.add("listing");

    listingElement.innerHTML = `
        <img src="${listing.image}" alt="${listing.title}">
        <h2>${listing.title}</h2>
        <p><strong>Price:</strong> ${listing.price}</p>
        <p><strong>Bedrooms:</strong> ${listing.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${listing.bathrooms}</p>
        <p><strong>Square Feet:</strong> ${listing.squareFeet}</p>
        <p><strong>Available Date:</strong> ${listing.availableDate}</p>
    `;

    listingsContainer.appendChild(listingElement);
});
