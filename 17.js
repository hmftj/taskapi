async function missingcapital() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let missingCapitals = data
    if (data.capital) {
            data.capital = data.capital.map((capital) => capital.toUpperCase());
        } else {
            data.capital = data.name.common.toUpperCase();
        }
        // Map to get the country names
        let countryNames = data.map((country) => {
            return country.name.common;
        });
        // Filter countries without capitals
        missingCapitals = countryNames.filter((country) => {
            return !data.capital.includes(country);
        });
        console.log("Countries without capitals:", missingCapitals);
    } catch (error) {
        console.error("Error:", error);
    }
}