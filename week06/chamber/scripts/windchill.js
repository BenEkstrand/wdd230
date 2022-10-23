function windChill() {
    let currentTemp = 15;
    let windSpeed = 10;
    let windChill;
    
    if (windSpeed > 3 && currentTemp <= 50) {
        windChill = 35.74 + 0.6215 * currentTemp - 35.75 * windSpeed ** 0.16 + 0.4275 * currentTemp * windSpeed ** 0.16;
    } else {
        windChill = "NA";
    }
    document.getElementById("temp").innerHTML = currentTemp;
    document.getElementById("speed").innerHTML = windSpeed;
    document.getElementById("chill").innerHTML = windChill.toFixed(1);
}

windChill();