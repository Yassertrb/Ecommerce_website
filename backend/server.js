import express from 'express'
// import products from './data/products.js'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running.')
});

// heda path routes la yesta3mlo
app.use('/api/products', productRoutes)



app.use((req, res, next) => {
    const error = new Error(`not found = ${req.originalUrl}`)
    res.status(404)
    next(error)
})

// midelwear bas tsewe talab 3a safha m3ayane abel ma tsewe aya shi btrouh 3al lmarhale 
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json(err.message)
})




const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running on ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))