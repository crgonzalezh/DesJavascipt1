document.addEventListener("DOMContentLoaded", () => {
    const priceElement = document.querySelector("#price");
    const quantityElement = document.querySelector("#quantity");
    const totalElement = document.querySelector("#total");
    const increaseButton = document.querySelector("#increase");
    const decreaseButton = document.querySelector("#decrease");

    const basePrice = parseFloat(priceElement.textContent);
    let quantity = parseInt(quantityElement.textContent);

    function updateTotal() {
        const total = basePrice * quantity;
        totalElement.textContent = total.toFixed(2);
    }

    increaseButton.addEventListener("click", () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    });

    decreaseButton.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    });

    updateTotal();
});
