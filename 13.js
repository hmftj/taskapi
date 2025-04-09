async function countryanguage() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  try {
    const data = await response.json();
    let languages = {};
    data.forEach((country) => {
      for (let lang in country.languages) {
        if (languages[lang]) {
          languages[lang]++;
        } else {
          languages[lang] = 1;
        }
      }
    });
    console.log(languages);
    return languages;
  } catch (error) {
    console.error("Error:", error);
  }
}
