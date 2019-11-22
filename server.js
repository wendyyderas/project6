require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const usersRoutes = require('./routes')

const app = express()

// const ATLAS_URI = process.env.ATLAS_URI || 'mongodb://localhost/auth'
const ATLAS_URI = process.env.ATLAS_URI
const PORT = process.env.PORT || 3001

mongoose.set('useCreateIndex', true)
mongoose.connect(ATLAS_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
	res.json({message: "API root"})
})

app.use('/api/users', usersRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})

// var products = [
// 	{
// 	"ProductName":"Drip Cake",
// 	"ProductType":"Cake",
// 	"Description": "Drip cakes for every occasion. We offer: Double Chocolate; Tuxedo Cake (Vanilla Frosting with Chocolate Ganache); Chocolate Mint Oreo.",
// 	"ShelfLife":"5",
// 	"Price":"69",
// 	"Stock": "3",
// 	"UrlImg": "https://bit.ly/30XuxlT" },

// 	{
// 		"ProductName":"Cocunut Cake",
// 		"ProductType":"Cake",
// 		"Description":"This cake is a WOW! Soft cake bursting with coconut flavor--toasted coconut inside and out and a creamy cream cheese frosting",
// 		"ShelfLife":"5",
// 		"Price":"55",
// 		"Stock": "10",
// 		"UrlImg": "https://bit.ly/32Ybz0f" },

// 	{
// 		"ProductName":"Brownie Cake",
// 		"ProductType":"Cake",
// 		"Description": "Layers of our amazing brownies—yes, the ones with the crisp crackly top and fudgy center, covered in our creamy Fudge frosting.",
// 		"ShelfLife":"10",
// 		"Price":"60",
// 		"Stock": "10",
// 		"UrlImg": "https://bit.ly/2Ystyc1" },

// 	{
// 		"ProductName":"VanillaPop",
// 		"ProductType":"CakePop",
// 		"Description": "Vanilla cake and icing, dipped in a pink chocolaty coating with white sprinkles.",
// 		"ShelfLife":"10",
// 		"Price":"12",
// 		"Stock": "45",
// 		"UrlImg": "https://bit.ly/2OkPYvO" 
// 	},

// 	{
// 		"ProductName":"ChocolatePop",
// 		"ProductType":"CakePop",
// 		"Description": "Chocolate cake mixed with chocolate butter cream, dipped in dark chocolate.",
// 		"ShelfLife":"10",
// 		"Price":"12",
// 		"Stock": "34",
// 		"UrlImg": "https://bit.ly/2GvJRym" 
// 	},

// 	{
// 		"ProductName":"Coco",
// 		"ProductType":"Cupcakes",
// 		"Description": "Flourless dark chocolate cake topped with a chocolate ganache rose and powdered sugar",
// 		"ShelfLife":"7",
// 		"Price":"20",
// 		"Stock": "30",
// 		"UrlImg": "https://bit.ly/2Ytuy3p" 
// 	},
// 	{
// 		"ProductName":"Pumpkin",
// 		"ProductType":"Cupcakes",
// 		"Description": "These Pumpkin cupcakes are no exception and I could just sit with a spoon and eat this creamy good cupcake.",
// 		"ShelfLife":"7",
// 		"Price":"30",
// 		"Stock": "20",
// 		"UrlImg": "https://bit.ly/2YnwVkf" 
// 	},
// 	{
// 		"ProductName":"Unicorn",
// 		"ProductType":"Cupcakes",
// 		"Description": "Vanilla cake decorated as a unicorn, topped with a swirl of cream cheese frosting",
// 		"ShelfLife":"7",
// 		"Price":"30",
// 		"Stock": "20",
// 		"UrlImg": "https://bit.ly/2Mh3UEm" 
// 	},

// ]
// var Product = require('./models/product.js')
// Product.collection.insert(products, function(err, docs){
//     if(err){
//         return console.error(err);
//     } else {
//         console.log("multiple documents inserted")
// 	}
// })