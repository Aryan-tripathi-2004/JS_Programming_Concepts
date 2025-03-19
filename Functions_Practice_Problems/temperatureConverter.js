function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
      console.log("Invalid input! Temperature should be between 0°C and 100°C.");
      return;
    }
    return (degC * 9 / 5) + 32;
  }
  
  function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
      console.log("Invalid input! Temperature should be between 32°F and 212°F.");
      return;
    }
    return (degF - 32) * 5 / 9;
  }
  
  function convertTemperature(choice, temp) {
    switch (choice) {
      case 1:
        console.log(`${temp}°C = ${celsiusToFahrenheit(temp)}°F`);
        break;
      case 2:
        console.log(`${temp}°F = ${fahrenheitToCelsius(temp)}°C`);
        break;
      default:
        console.log("Invalid choice! Enter 1 for °C to °F or 2 for °F to °C.");
    }
  }
  
  // Example usage:
  convertTemperature(1, 25); // Convert 25°C to °F
  convertTemperature(2, 77); // Convert 77°F to °C
  