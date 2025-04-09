async function createCountrySummaryArray() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      const countrySummary = data.map(country => ({
        name: country.name.common || 'N/A',
        population: country.population || 0,
        region: country.region || 'N/A',
        capital: country.capital ? country.capital[0] : 'N/A'
      }));
  
      console.log("First 10 countries summary:");
      console.log(countrySummary.slice(0, 10));
  
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  }
  
  createCountrySummaryArray();
  