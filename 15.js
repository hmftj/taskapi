async function groupcountry() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    let groupedCountries = {};
    data.forEach((country) => {
      let region = country.region;
      if (groupedCountries[region]) {
        groupedCountries[region].push(country.name.common);
      } else {
        groupedCountries[region] = [country.name.common];
      }
    });

    console.log(groupedCountries);
    return groupedCountries;
  } catch (error) {
    console.error("Error:", error);
  }
}
