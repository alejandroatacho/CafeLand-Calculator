function calculate() {
    // Get input values
    let requiredAmount = Number((document.getElementById("requiredAmount") as HTMLInputElement).value);
    let quantityPerOven = Number((document.getElementById("quantityPerOven") as HTMLInputElement).value);
    let quantityPerOvenBonus = Number((document.getElementById("quantityPerOvenBonus") as HTMLInputElement).value);
    // let totalOvens = Number((document.getElementById("totalOvens") as HTMLInputElement).value);
    let ovenBoosterOn = (document.getElementById("ovenBoosterOn") as HTMLInputElement).checked;
    let ovenBoosterPercentage = Number((document.getElementById("ovenBoosterPercentage") as HTMLInputElement).value);

    // Perform calculation
    let result: number;
    if (ovenBoosterOn) {
        result = requiredAmount / ((quantityPerOven + quantityPerOvenBonus * (1 + ovenBoosterPercentage / 100)));
    } else {
        result = requiredAmount / (quantityPerOven + quantityPerOvenBonus);
    }

    // Update UI with the result
    document.getElementById("result")!.textContent = result.toFixed(2);
}

// Expose the function to the global scope so HTML can call it
(window as any).calculate = calculate;
