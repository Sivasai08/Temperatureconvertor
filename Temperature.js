function convertToCelsius() {
  const celsiusInput = document.getElementById("celsius").value;
  const celsius = parseFloat(celsiusInput);

  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  } else {
    document.getElementById("result").textContent =
      "Please enter a valid number.";
  }
}
