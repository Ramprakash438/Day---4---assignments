const countriesData = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://restcountries.com/v3.1/all");

    xhr.responseType = "json";

    xhr.send();

    xhr.onload = () => {
        var data = xhr.response;
        data = data.forEach((element) => {
            console.log(element.name, element.region, element.subregion, element.population)
        })
    }

}
countriesData();