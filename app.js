function calculateTotal(price, quantity) {
    if (price < 0 || quantity < 0) {
        throw new Error("Price and quantity cannot be negative");
    }

    return price * quantity;
}

function calculateDiscount(total, discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Discount must be between 0 and 100");
    }

    return total - (total * discountPercentage / 100);
}

function createOrder(item, price, quantity, discount = 0) {
    const total = calculateTotal(price, quantity);
    const finalPrice = calculateDiscount(total, discount);

    return {
        item,
        price,
        quantity,
        discount,
        total,
        finalPrice
    };
}

module.exports = {
    calculateTotal,
    calculateDiscount,
    createOrder
};