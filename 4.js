async function getCountriesOver100Million() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      const largeCountries = data
        .filter(country => country.population > 100_000_000)
        .map(country => `${country.name.common} - ${country.population}`);
  
      console.log("Countries with population over 100 million:");
      largeCountries.forEach(c => console.log(c));
  
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  }
  
  getCountriesOver100Million();
  