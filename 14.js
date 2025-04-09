async function countrycalling() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let callingCodes = {0: 195};
        data.forEach((country) => {
            country.callingCodes.forEach((code) => {
                if (callingCodes[code]) {
                    callingCodes[code]++;
                } else {
                    callingCodes[code] = 1;
                }
            });
        });
        console.log(callingCodes);
        return callingCodes;
    }catch (error) {
        console.error("calling the error the message :", error);
    }
    
}