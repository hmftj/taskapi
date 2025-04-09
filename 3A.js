async function printCapitals() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (response.status === 200) {
        const data = await response.json();
        data.forEach(country => {
          const countryName = country.name.common;
          const capital = country.capital ? country.capital[0] : "N/A";
          console.log(`${countryName}: ${capital}`);
        });
      } else {
        console.error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  printCapitals();
  