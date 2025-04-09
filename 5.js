async function getTop5LargestCountriesByArea() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const countries = await response.json();
  
      const sortedByArea = countries
        .filter(country => country.area) // Ensure area exists
        .sort((a, b) => b.area - a.area) // Sort in descending order
        .slice(0, 5); // Get top 5
  
      console.log("Top 5 Countries by Area:");
      sortedByArea.forEach(country => {
        console.log(`${country.name.common} - ${country.area}`);
      });
  
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  }
  
  getTop5LargestCountriesByArea();
  