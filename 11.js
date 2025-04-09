async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    const countriesWithRegion = countries.map(country => {
      return {
        name: country.name.common,
        region: country.region
      };
    });
    return countriesWithRegion;
    
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }

  
}