function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 1; i <= quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    debugger
    return totalPrice;
}

calculateDiscountedPrice(10, 100);


module.exports = calculateDiscountedPrice;