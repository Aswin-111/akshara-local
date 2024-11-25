async function fetchCountryBoundary(countryName) {
    const overpassQuery = `
        [out:json];
        relation["boundary"="administrative"]["name"="${countryName}"];
        out geom;
    `;

    const encodedQuery = encodeURIComponent(overpassQuery);
    const url = `https://overpass-api.de/api/interpreter?data=${encodedQuery}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data; // This will contain the polygon boundary data
    } catch (error) {
        console.error('Error fetching country boundary data:', error);
    }
}

// Usage example
fetchCountryBoundary('France')
    .then(boundaryData => {
        console.log('Boundary data for France:', boundaryData.elements[0].bounds);
        
    });