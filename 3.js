fetch("https://restcountries.com/v3.1/all")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      const countryName = country.name.common;
      const capital = country.capital ? country.capital[0] : "N/A";
      console.log(`${countryName}: ${capital}`);
    });
  })
  .catch(error => console.error("Error:", error));
