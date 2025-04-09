async function countericount() {
    try {
        const response =await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const countries = await response.json();
        const regionCounts = {};
        countries.forEach(country => {
            const region = country.region;
            if (regionCounts[region]) {
                regionCounts[region]++;
            } else {
                regionCounts[region] = 1;
            }
        });
        console.log(regionCounts);
    } catch (error) {
        console.error("Error fething the countries:", error);
        
    }
    
}