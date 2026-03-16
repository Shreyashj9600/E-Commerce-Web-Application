const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require('./routes/auth/auth-routes')
const adminProductsRouter = require("./routes/admin/products-routes");
const shopProductsRouter = require('./routes/shop/products-routes')
const shopCartRouter = require('./routes/shop/cart-routes')
const shopAddressRouter = require("./routes/shop/address-routes");

// create a database connection

mongoose.connect('mongodb+srv://connectshreyashj96_db_user:shreyashjadhav96@cluster0.3q6e6hc.mongodb.net/')
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.log(error);
    })


const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'api is running'
    })
})

app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use("/api/admin/products", adminProductsRouter);
app.use('/api/shop/products', shopProductsRouter)
app.use('/api/shop/cart', shopCartRouter)
app.use("/api/shop/address", shopAddressRouter);

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
})