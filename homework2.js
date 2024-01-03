function convertTemperatureRange(startValue, endValue, scale) {
    let result = "";
    for (let temperature = startValue; temperature <= endValue; temperature++) {
        if (scale === "C") {
            const fahrenheit = (temperature * 9/5) + 32;
            result += `${temperature}°C is ${fahrenheit.toFixed(2)}°F<br>`;
        } else if (scale === "F") {
            const celsius = (temperature - 32) * 5/9;
            result += `${temperature}°F is ${celsius.toFixed(2)}°C<br>`;
        } else {
            result = "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
            break; // Exit the loop if the scale is invalid
        }
    }
    return result;
}

function convertAndDisplay() {
    const startTemperature = parseFloat(document.getElementById('startTemperature').value);
    const endTemperature = parseFloat(document.getElementById('endTemperature').value);
    const temperatureScale = document.getElementById('temperatureScale').value.toUpperCase();
    const resultDiv = document.getElementById('result');

    if (!isNaN(startTemperature) && !isNaN(endTemperature)) {
        const result = convertTemperatureRange(startTemperature, endTemperature, temperatureScale);
        resultDiv.innerHTML = result;
    } else {
        resultDiv.innerHTML = "Invalid input. Please enter valid numerical temperatures.";
    }
}

