function updateTotalOvenQuantity(): void {
    // Get the input elements and ensure TypeScript recognizes them
    let quantityPerOven = document.getElementById("quantityPerOven") as HTMLInputElement;
    let quantityPerOvenBonus = document.getElementById("quantityPerOvenBonus") as HTMLInputElement;
    let totalOvenQuantity = document.getElementById("totalOvenQuantity") as HTMLInputElement;

    // Convert values to numbers and update the total
    totalOvenQuantity.value = (Number(quantityPerOven.value) + Number(quantityPerOvenBonus.value)).toString();
}

// Attach event listeners to update dynamically when input changes
document.getElementById("quantityPerOven")?.addEventListener("input", updateTotalOvenQuantity);
document.getElementById("quantityPerOvenBonus")?.addEventListener("input", updateTotalOvenQuantity);

// Initialize value on page load
updateTotalOvenQuantity();
