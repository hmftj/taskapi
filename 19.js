async function averagepopulations() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let totalPopulation = 0;
        let countryCount = 0;
        
        data.forEach((country) => {
            if (country.population) {
                totalPopulation += country.population;
                countryCount++;
            }
        });
        
        let averagePopulation = totalPopulation / countryCount;
        console.log("Average Population:", averagePopulation);
        return averagePopulation;
    } catch (error) {
        console.error("Error:", error);
    }
    
}