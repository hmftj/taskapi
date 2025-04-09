async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (response.status === 200) 
        {
      const data = await response.json();
      data.forEach((country) => {
        console.log(country.name.common);
      });
    } else {
      console.error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getCountries();
