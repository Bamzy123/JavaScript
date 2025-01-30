function celsiusToFahrenheit(celsius) {
    return (9 / 5) * celsius + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

function displayTemperatureTable() {
    console.log("Celsius  Fahrenheit  |  Fahrenheit  Celsius");
    console.log("-----------------------------------------");

    for (let celsius = 40, fahrenheit = 120; celsius >= 31; celsius--, fahrenheit -= 10) {
        console.log(
            `${celsius.toFixed(1)}     ${celsiusToFahrenheit(celsius).toFixed(1)}     |  ` +
            `${fahrenheit.toFixed(1)}     ${fahrenheitToCelsius(fahrenheit).toFixed(2)}`
        );
    }
}
displayTemperatureTable();