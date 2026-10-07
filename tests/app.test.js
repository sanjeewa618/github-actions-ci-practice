const {
    calculateTotal,
    calculateDiscount,
    createOrder
} = require("../app");

describe("Order Management Tests", () => {

    test("should calculate total correctly", () => {
        const result = calculateTotal(1000, 2);

        expect(result).toBe(2000);
    });

    test("should calculate discount correctly", () => {
        const result = calculateDiscount(2000, 10);

        expect(result).toBe(1800);
    });

    test("should create order correctly", () => {
        const order = createOrder(
            "Laptop",
            1000,
            2,
            10
        );

        expect(order.item).toBe("Laptop");
        expect(order.total).toBe(2000);
        expect(order.finalPrice).toBe(1800);
    });

    test("should reject negative price", () => {
        expect(() => {
            calculateTotal(-1000, 2);
        }).toThrow();
    });

    test("should reject invalid discount", () => {
        expect(() => {
            calculateDiscount(2000, 150);
        }).toThrow();
    });

});