async function countriesmutiworld() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let countryLanguages = {};
    
        data.forEach((country) => {
        if (country.languages) {
            for (let lang in country.languages) {
            if (countryLanguages[lang]) {
                countryLanguages[lang].push(country.name.common);
            } else {
                countryLanguages[lang] = [country.name.common];
            }
            }
        }
        });
    
        console.log(countryLanguages);
        return countryLanguages;
    } catch (error) {
        console.error("Error:", error);
    }
    
}