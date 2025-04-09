async function getAsianCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (response.status === 200) {
        const data = await response.json();
        const asianCountries = data.filter(country => country.region === "Asia");
        asianCountries.forEach(country => {
          console.log(country.name.common);
        });
      } else {
        console.error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  getAsianCountries();
  