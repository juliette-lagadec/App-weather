
function convertTemperature() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerHTML = `${celsius}°C is ${fahrenheit.toFixed(1)}°F`;

    giveClothingAdvice(celsius);
}

function giveClothingAdvice(celsius) {
    let advice = "";
    if (celsius < 10) {
        advice = "Wear a heavy jacket, scarf, and gloves!";
    } else if (celsius >= 10 && celsius < 20) {
        advice = "Light sweater or jacket is ideal.";
    } else if (celsius >= 20 && celsius < 25) {
        advice = "T-shirt and jeans are perfect!";
    } else if (celsius >= 25 && celsius < 30) {
        advice = "Short sleeves and light clothing.";
    } else {
        advice = "Tank tops, shorts, and sandals recommended!";
    }

    document.getElementById('clothing-advice').innerHTML = advice;
}
