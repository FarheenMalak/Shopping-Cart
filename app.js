document.getElementById("calculate-btn").addEventListener("click", function() {
    var price1 = parseFloat(document.getElementById("price1").value);
    var quantity1 = parseInt(document.getElementById("quantity1").value);
    var price2 = parseFloat(document.getElementById("price2").value);
    var quantity2 = parseInt(document.getElementById("quantity2").value);
    var shippingCharges = parseFloat(document.getElementById("shipping").value);

    // Validate input
    if (isNaN(price1) || isNaN(quantity1) || isNaN(price2) || isNaN(quantity2) || isNaN(shippingCharges) || 
        price1 < 0 || quantity1 < 0 || price2 < 0 || quantity2 < 0 || shippingCharges < 0) {
        alert("Please enter valid amounts.");
        return;
    }

    // Calculate total cost
    var totalCost = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;

    document.getElementById("total-cost").innerText = 
        "Total cost of your order is: " + totalCost.toFixed(2);
});
