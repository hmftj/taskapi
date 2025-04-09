fetch("https://restcountries.com/v3.1/all")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => console.error("Error:", error));
