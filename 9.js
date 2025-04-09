async function longest() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const countries = await response.json();
  
      const longestCountryName = countries.reduce((longest, country) => {
        return country.name.common.length > longest.length ? country.name.common : longest;
      }, "");
  
      console.log("The country with the longest name is:");
      console.log(longestCountryName);
  
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  }
  
