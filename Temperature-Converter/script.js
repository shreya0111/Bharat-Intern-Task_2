const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const InputTempUnit = document.querySelector(".temperature select");
const InputResultUnit = document.querySelector(".result select");

// Focusing On Temperature Section
window.addEventListener("load", () => temperature.focus());

temperature.oninput = function(){
    let InputTempUnitValue = InputTempUnit.value;
    let InputResultUnitValue = InputResultUnit.value;

    // Celsius To Other
    let CelsiusToKelvin = InputTempUnitValue === "Celsius" && InputResultUnitValue === "Kelvin";
    let CelsiusToFahrenheit = InputTempUnitValue === "Celsius" && InputResultUnitValue === "Fahrenheit";

    // Fahrenheit To Other
    let FahrenheitToKelvin = InputTempUnitValue === "Fahrenheit" && InputResultUnitValue === "Kelvin";
    let FahrenheitToCelsius = InputTempUnitValue === "Fahrenheit" && InputResultUnitValue === "Celsius";

    // Kelvin To Other
    let KelvinToCelsius = InputTempUnitValue === "Kelvin" && InputResultUnitValue === "Celsius";
    let KelvinToFahrenheit = InputTempUnitValue === "Kelvin" && InputResultUnitValue === "Fahrenheit";

    // For same unit
    let SameUnit = InputTempUnitValue === InputResultUnitValue;

    let InputTemp = temperature.value;
    let ConvertTemp = 0;
    if(CelsiusToKelvin){
        ConvertTemp = (InputTemp * 1) + 273.15;
        result.value = ConvertTemp.toFixed(2);

        if(!temperature.value) result.value = "";
    }
    else if(CelsiusToFahrenheit){
        ConvertTemp = (((InputTemp * 9) / 5) + 32);
        result.value = ConvertTemp.toFixed(2);

        if(!temperature.value) result.value = "";
    }
    else if(FahrenheitToCelsius){
        ConvertTemp = (((InputTemp  - 32) * 5) / 9);
        result.value = ConvertTemp.toFixed(2);

        if(!temperature.value) result.value = "";
    }
    else if(FahrenheitToKelvin){
        ConvertTemp = ((((InputTemp  - 32) * 5) / 9) + 273.15);
        result.value = ConvertTemp.toFixed(2);

        if(!temperature.value) result.value = "";
    }
    else if(KelvinToCelsius){
        ConvertTemp = (InputTemp - 273.15);
        result.value = ConvertTemp.toFixed(2);

        if(!temperature.value) result.value = "";
    }
    else if(KelvinToFahrenheit){
        ConvertTemp = ((((InputTemp - 273.15) * 9 ) / 5) + 32);
        result.value = ConvertTemp.toFixed(2);

        if(!temperature.value) result.value = "";
    }
    else{
        ConvertTemp = (InputTemp * 1);
        result.value = ConvertTemp.toFixed(2);
    }
}