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

const http = require("http");

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GitHub Actions CI/CD Practice</title>
        <style>
            body {
                margin: 0;
                padding: 40px;
                font-family: Arial, sans-serif;
                background-color: #ffffff;
                color: #333333;
                min-height: 100vh;
                box-sizing: border-box;
            }
            h1 {
                color: #111111;
                margin-bottom: 16px;
            }
            p {
                font-size: 16px;
                line-height: 1.6;
                margin: 8px 0;
            }
        </style>
    </head>
    <body>
        <h1>GitHub Actions CI/CD workflow</h1>
        <p>Application is running successfully on Kubernetes.</p>
        <p>Docker to GHCR to Kubernetes</p>
    </body>
</html>`);
});

if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}