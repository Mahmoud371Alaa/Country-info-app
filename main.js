let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 404) {
                result.innerHTML = `<h3>Country not found. Please try again.</h3>`;
                return;
            }

            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name.common}</h2>
            
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population.toLocaleString()}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)[0]].name} 
                    - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages).join(", ")}</span>
                </div>
            </div>
            `;
        })
        .catch(error => {
            result.innerHTML = `<h3>An error occurred. Please try again later.</h3>`;
            console.error("Error fetching data:", error);
        });
});






// Switzerland  سويسراااا
// let arr = [1, 2, 3, 4];
// console.log(arr.toString());       // "1,2,3,4"
// console.log(arr.toString().split(","));  // ["1", "2", "3", "4"]
// console.log(arr.toString().split(",").join(", ")); // "1, 2, 3, 4"  //مقدرش استخدمها غير في array
