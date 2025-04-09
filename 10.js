

async function getCountriesUsingUSD() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data;

    const usdCountries = countries
      .filter(country => country.currencies && country.currencies.USD)
      .map(country => country.name.common);

    console.log('Countries using USD:');
    usdCountries.forEach(name => console.log(name));
  } catch (error) {
    console.error('Error fetching country data:', error.message);
  }
}

getCountriesUsingUSD();
