async function bordercount(params) {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let borderCountries = {};

        data.forEach((country) => {
            if (country.borders) {
                country.borders.forEach((border) => {
                    if (borderCountries[border]) {
                        borderCountries[border]++;
                    } else {
                        borderCountries[border] = 1;
                    }
                });
            }
        });

        console.log(borderCountries);
        return borderCountries;
        
    } catch (error) {
        console.error("Error:", error);
        
    }
}