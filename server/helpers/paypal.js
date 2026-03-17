const paypal = require("paypal-rest-sdk");

paypal.configure({
    mode: "sandbox",
    client_id: "AalMG1OzEX9I0vnOu0AhzBaWz6uRGLEbhNB42TxEbnvi06LOQRVaC5x1oXcsn3KTCHvjUK02XVXo5oLy",
    client_secret: "EGYZNU6fhivYuZMibgCQPWqIsF8tu7xneTZkc_n7x5mjkAQdXTkgWxl4hO71Qq4NeDHm-GRfkEBkgnZL",
});

module.exports = paypal;                                                