const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const port = 3001

app.use(cors())
app.use(bodyParser.json())

// Connect to mongodb
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.llje0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


client.connect(err => {
  const productsCollection = client.db("a-ama-clone").collection("products");
  const deliveryCollection = client.db("a-ama-clone").collection("users-delivery-address");
  const categoriesCollection = client.db("a-ama-clone").collection("categories");
  const ordersCollection = client.db("a-ama-clone").collection("orders");
  const adminsCollection = client.db("a-ama-clone").collection("admins");

  app.get('/products', (req, res) => {
    productsCollection.find({})
      .toArray((err, docx) => {
        docx = docx.sort(() => Math.random() - 0.5)
        res.send(docx)
      })
  })

  // Get products data by category
  app.get('/products/:category', (req, res) => {
    productsCollection.find({
      category: req.params.category
    })
      .toArray((err, docx) => {
        docx = docx.sort(() => Math.random() - 0.5)
        res.send(docx)
      })
  })

  // Get one product data by category & id
  app.get('/product/:category/:id', (req, res) => {
    productsCollection.findOne({
      category: req.params.category,
      id: req.params.id
    })
      .then(data => {
        res.send(data)
      })
  })

  // Get one product data by id
  app.get('/product/:id', (req, res) => {
    productsCollection.findOne({ id: req.params.id })
      .then(data => {
        res.send(data)
      })
  })

  // Get limited products data by category
  app.get('/products/limit/:limit', (req, res) => {
    productsCollection.find({}).limit(req.params.limit)
      .toArray((err, docx) => {
        res.send(docx)
      })
  })

  // Get limited products data by category
  app.get('/search', (req, res) => {
    if (req.query.name.length > 0) {
      productsCollection.find({ title: { $regex: req.query.name } })
        .toArray((err, docx) => {
          res.status(200).send(docx)
        })
    } else {
      res.status(400).send("Search value empty.")
    }
  })

  // Set category
  app.get('/categoriesAdd', (req, res) => {
    // categoriesCollection.insertMany(categories)
    res.send("Added...")
  })

  // Get category
  app.get('/category', (req, res) => {
    categoriesCollection.find({})
      .toArray((err, docx) => {
        res.send(docx)
      })
  })

  // Get products by more id
  app.post('/getproductsbymoreid', (req, res) => {
    productsCollection.find({ id: { $in: req.body } })
      .toArray((err, docx) => {
        res.send(docx)
        console.log(docx)
      })
  })

  // Add a delivery address 
  app.post('/addADeliveryAddress', (req, res) => {
    deliveryCollection.insertOne(req.body)
  })

  // Get delivery address 
  app.get('/get-delivery-address', (req, res) => {
    deliveryCollection.find({
      userId: req.query.userId,
    })
      .toArray((err, docx) => {
        res.send(docx)
      })
  })

  // Post order data in DB
  app.post('/post-order', (req, res) => {
    ordersCollection.insertOne(req.body)
      .then(response => {
        res.send(response)
        // if (response.insertedCount === 1) {
        //   res.status(200).send("Order Place Successful...")
        // }
      })
  })

  // Post order data in DB
  // app.get('/post-admin', (req, res) => {
  //   adminsCollection.insertOne({
  //     email: "mxasraful2000@gmail.com",
  //     role: "admin",
  //     that_added: "mxasraful2000@gmail.com"
  //   })
  //     .then(response => {
  //       res.send("Added...")
  //     })
  // })




  app.get('/productsAdd', (req, res) => {
    productsCollection.insertMany(products)
      .then(response => {
        res.send("Added.....")
      })
  })
});

app.get('/', (req, res) => {
  res.send('Asrafuls amazon clone backend server is running......')
})

app.listen(process.env.PORT || port)