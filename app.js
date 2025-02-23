// Replace with your Supabase URL and Key (from your Supabase project)
const SUPABASE_URL = 'https://powkbxgoplaximtugjfj.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvd2tieGdvcGxheGltdHVnamZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNjA2MjIsImV4cCI6MjA1NTgzNjYyMn0.Ev22p59PFCpJGy4fV8KWnh-wFAAYuW4Ua_ydIFnl1gs';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to fetch listings from Supabase
async function fetchListings() {
    const { data, error } = await supabase
        .from('listings') // Make sure to replace 'listings' with the exact name of your table
        .select('*'); // Get all fields from the listings table

    if (error) {
        console.error('Error fetching data: ', error);
        return;
    }

    // Display data on the page
    const listingsContainer = document.getElementById("listings");
    listingsContainer.innerHTML = ''; // Clear previous data

    data.forEach(listing => {
        const listingElement = document.createElement("div");
        listingElement.classList.add("listing");

        listingElement.innerHTML = `
            <img src="${listing.image_url}" alt="${listing.title}" />
            <h2>${listing.title}</h2>
            <p><strong>Price:</strong> ${listing.price}</p>
            <p><strong>Bedrooms:</strong> ${listing.bedrooms}</p>
            <p><strong>Bathrooms:</strong> ${listing.bathrooms}</p>
            <p><strong>Square Feet:</strong> ${listing.square_feet}</p>
            <p><strong>Available Date:</strong> ${listing.available_date}</p>
        `;

        listingsContainer.appendChild(listingElement);
    });
}

// Call the fetchListings function when the page loads
document.addEventListener('DOMContentLoaded', fetchListings);
