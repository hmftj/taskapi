async function nativenameenglish() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    let nativeName= {};
    data.foreach((country) => {
      if (country.name && country.name.common && country.name.nativeName) {
        
        nativeName[country.name.common] = country.name.nativeName;
      }
    });
    console.log(nativeName);
    return nativeName;
  } catch (error) {
    console.error("Error:", error);
  } 
}