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



const products = [
  {
    title: "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81aot0jAfFL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/91GRfDGDJIL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81mJ-Mdc-OL._AC_SX466_.jpg"
    ],
    brand: "Apple",
    variant: [
      "512GB",
    ],
    featuresTitle: [
      "Brand",
      "CPU Model",
      "Computer Memory Size",
      "Ram Memory Installed Size",
      "Model Name",
    ],
    featuresValue: [
      "Apple",
      "Core i7-3720QM",
      '16 GB',
      "16 GB",
      "MacBook Pro",
    ],
    bannerF: false,
    about: [
      "",
    ],
    price: [2299],
    category: "laptop",
    id: 'ASD345345ERT45632GRE544',
    rating: 5,
  },
  {
    title: "2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/712v9WGWDBL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/91YEUMzK8cL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61uNK7su24L._AC_SX466_.jpg"
    ],
    brand: "Apple",
    variant: [
      "256GB"
    ],
    featuresTitle: [
      "Brand",
      "Operating System",
      "CPU Manufacturer",
      "Screen Size",
      "Computer Memory Size",
    ],
    bannerF: false,
    featuresValue: [
      "Apple",
      "Mac OS",
      "Apple",
      "13.3 Inches",
      "8 GB",
    ],
    about: [
      "",
    ],
    price: [999],
    category: "laptop",
    id: 'AWE43523F345DDFG455456',
    rating: 5,
  },
  {
    title: "Dell - Inspiron 14 7000 2-in-1 - 14' Touch Screen Laptop",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409061_sd.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409061ld.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409061cv1d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409061cv3d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409061cv7d.jpg"
    ],
    brand: "Dell",
    variant: [
      "8GB / 256GB",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [579],
    category: "laptop",
    id: 'FG438R7FG3765RFG7364RUF3764TRF3UY34',
  },
  {
    title: "HP - 14' Laptop - AMD Athlon - 4GB Memory - 128GB SSD - Jet Black",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450167_sd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450167_rd.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450167ld.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450167cv1d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450167cv3d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450167cv4d.jpg"
    ],
    brand: "HP",
    variant: [
      "4GB Memory - 128GB SSD",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [299],
    category: "laptop",
    id: 'CVJHG34FCHBG3G764T5CG345C3G47BY0957JY5R',
  },
  {
    title: "HP - Spectre x360 2-in-1 15.6' 4K UHD Touch-Screen Laptop",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428658_sd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428658_rd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428658ld.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428658cv1d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428658cv3d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428658cv4d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428658cv11d.jpg"
    ],
    brand: "HP",
    variant: [
      " 512GB SSD + 32GB RAM",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [1399],
    category: "laptop",
    id: 'CFD34IOCU8356349I4JRXC3875YEHFR27634C3U45',
  },
  {
    title: "HP - ENVY x360 2-in-1 15.6 Touch-Screen Laptop - Intel Core i7 - 16GB Memory - 512GB SSD + 32GB Intel Optane - Natural Silver",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452998_sd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452998_rd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452998ld.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452998cv1d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452998cv3d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452998cv4d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452998cv7d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452998cv10d.jpg"
    ],
    brand: "HP",
    variant: [
      "512GB SSD + 32GB",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [1049],
    category: "laptop",
    id: 'CJH348723CIH2873462CYERH736CFD76C43C5344537',
  },
  {
    title: "Samsung - Galaxy Book Flex Alpha 2-in-1 13.3' QLED Touch-Screen Laptop - Intel Core i7 - 12GB Memory - 512GB SSD - Royal Silver",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414_sd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414_rd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414ld.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414cv1d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414cv3d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414cv4d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414cv7d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414cv10d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414cv11d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414cv12d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398414cv13d.jpg"
    ],
    brand: "HP",
    variant: [
      "12GB Memory - 512GB SSD",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [799],
    category: "laptop",
    id: 'CYB54387C445Y3V456V455FG8345763C4I823467X24523534',
  },
  {
    title: "Dell - Inspiron 15.6-inch FHD + Touch Laptop -AMD Ryzen 5 - 12GB RAM - 256 GB SSD + 1 TB HDD - Black",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338_sd.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338_rd.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338ld.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338cv1d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338cv3d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338cv4d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338cv7d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338cv10d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438338cv11d.jpg;maxHeight=1000;maxWidth=1000",
    ],
    brand: "Dell",
    variant: [
      "12GB RAM - 256 GB SSD",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [619],
    category: "laptop",
    id: 'C2346223HX8275EWUCT3475G293458JGCVKKD',
  },
  {
    title: "Lenovo - Ideapad 3 15 15.6' Touch-Screen Laptop - Intel Core i3 - 8GB Memory - 256GB SSD - Abyss Blue",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449496_sd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449496_rd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449496ld.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449496cv1d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449496cv4d.jpg",
    ],
    brand: "Lenovo",
    variant: [
      "8GB Memory - 256GB SSD",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [449],
    category: "laptop",
    id: 'CX349857XCU2J3X7345YCJG34653YFISDUF',
  },
  {
    title: "Dell - Inspiron 7000 2-in-1 - 17' QHD+ Touchscreen Laptop - 11th Gen Intel Core i7 -8GB RAM - 256GB SSD - Silver",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432550_sd.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432550ld.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432550cv3d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432550cv12d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432550cv1d.jpg"
    ],
    brand: "Dell",
    variant: [
      "8GB RAM - 256GB SSD",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [899],
    category: "laptop",
    id: 'F3ON45YN3N4RI763T2CX4TH376C35C545',
  },
  {
    title: "Lenovo - IdeaPad S340 15' Touch-Screen Laptop - AMD Ryzen 7 3700U - 12GB Memory - 512GB Solid State Drive -",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426703_sd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426703_rd.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426703cv1d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426703cv3d.jpg;maxHeight=1000;maxWidth=1000"
    ],
    brand: "Lenovo",
    variant: [
      "12GB Memory - 512GB",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [649],
    category: "laptop",
    id: 'CW4534X38465T3U4G576CY73645C34X345',
  },
  {
    title: "ASUS - ROG Zephyrus M15 15.6' 4K Ultra HD Gaming Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 2060 - 1TB SSD - Prism Black",
    imgs: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403817_sd.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403817_rd.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403817ld.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403817cv1d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403817cv3d.jpg;maxHeight=1000;maxWidth=1000",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403817cv4d.jpg",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403817cv7d.jpg;maxHeight=1000;maxWidth=1000",
    ],
    brand: "Asus",
    variant: [
      "16GB Memory - 1TB SSD",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [1299],
    category: "laptop",
    id: '3C4C033409C30956OI389Y6C3KTGY873578VF',
  },
  {
    title: "Samsung Galaxy A52 (Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/71JxTo64ffL._SY741_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71dEAbRRyFL._SY741_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61WlSuSFklL._SY741_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51yAGksyzzL._SY741_.jpg"
    ],
    brand: "Samsung",
    variant: [
      "128GB",
      "256GB"
    ],
    featuresTitle: [
      "Service Provider",
      "Brand",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: true,
    featuresValue: [
      "Unlocked",
      "Samsung Electronics",
      "6.9 Inches",
      "Android",
    ],
    about: [
      "Power of 5G: Get next-level power for everything you love to do with Samsung Galaxy 5G; Share more, game harder, experience more and never miss a beat",
      "Single Take AI: Capture video and multiple types of images with one tap of the shutter button; Lenses, effects and filters capture the best of every moment, every time",
      "Hires Camera Zoom: Capture hires images from 300 feet away that look like they were taken from 3 feet away; The game-changing new 100x Space Zoom delivers unprecedented power and clarity",
      "Ultra Bright Night Mode: Capture pro-quality content in Ultra Bright Night mode to capture dazzling, blur-free photos and vivid HRD video without flash, even in low light",
      "Super Fast Charging: Charge up quicker with Super Fast Charge so you can keep moving, with more juice; Give your buds – or Galaxy Buds – a boost of power with Wireless PowerShare right from Galaxy S20 Ultra 5G",
      "All-day Battery: S20 Ultra 5G’s intelligent battery uses an algorithm to learn from how you live to optimize power and take you through a day or more of work and life without ever giving out on you",
    ],
    price: [279, 289],
    category: "mobile",
    id: 'RY57U6HJTY6U657IUY&fhgfgh5645645GJHBU%Y',
    rating: 5,
  },
  {
    title: "Samsung Galaxy S20 5G Factory Unlocked",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/71Ucx6EavtL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41QAB6NyEsL._AC_SY879_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71h1NfW14xL._AC_SX425_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61-hkTJ6MDL._AC_SY741_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61MXdL2jpOL._AC_SY741_.jpg",
    ],
    brand: "Samsung",
    variant: [
      "128GB",
      "512GB"
    ],
    featuresTitle: [
      "Service Provider",
      "Brand",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: true,
    featuresValue: [
      "Unlocked",
      "Samsung Electronics",
      "6.9 Inches",
      "Android",
    ],
    about: [
      "Power of 5G: Get next-level power for everything you love to do with Samsung Galaxy 5G; Share more, game harder, experience more and never miss a beat",
      "Single Take AI: Capture video and multiple types of images with one tap of the shutter button; Lenses, effects and filters capture the best of every moment, every time",
      "Hires Camera Zoom: Capture hires images from 300 feet away that look like they were taken from 3 feet away; The game-changing new 100x Space Zoom delivers unprecedented power and clarity",
      "Ultra Bright Night Mode: Capture pro-quality content in Ultra Bright Night mode to capture dazzling, blur-free photos and vivid HRD video without flash, even in low light",
      "Super Fast Charging: Charge up quicker with Super Fast Charge so you can keep moving, with more juice; Give your buds – or Galaxy Buds – a boost of power with Wireless PowerShare right from Galaxy S20 Ultra 5G",
      "All-day Battery: S20 Ultra 5G’s intelligent battery uses an algorithm to learn from how you live to optimize power and take you through a day or more of work and life without ever giving out on you",
    ],
    price: [1399, 1599],
    category: "mobile",
    id: 'RY57U6HJTY6U657TGYH76TYUTYUYTU6T76',
    rating: 5,
  },
  {
    title: "Samsung Galaxy A21 Factory Unlocked",
    imgs: [
      "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-a/galaxy-a21/pdp/06092020/PDP-GALLERY-A21-black-02-1600x1200.jpg?$product-details-jpg$",
      "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-a/galaxy-a21/pdp/06092020/PDP-GALLERY-A21-black-03-1600x1200.jpg?$product-details-jpg$",
      "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-a/galaxy-a21/pdp/06092020/PDP-GALLERY-A21-black-04-1600x1200.jpg?$product-details-jpg$",
      "https://images-na.ssl-images-amazon.com/images/I/81JTZOBESHL._AC_SL1500_.jpg"
    ],
    brand: "Samsung",
    variant: [
      "32 GB",
    ],
    featuresTitle: [
      "Service Provider",
      "Brand	Samsung",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "Unlocked",
      "Electronics",
      "6.5 Inches",
      "Android 10.0",
    ],
    about: [
      "Charge Up. Power Through: Spend more time scrolling, texting and sharing, and less time looking for an outlet to charge your mobile phone; Its long-lasting battery has the power to keep up with you",
      "A Lens for Your Favorite Angle: Capture shareable cell phone portraits, wide shots and videos with the Samsung Galaxy A21’s versatile, 16MP triple-lens camera Big Screen to Get More Done: Keep in touch with friends, family and the news with plenty of room on a crystal-clear, 6.5 edge-to-edge display screen",
      "Store More: Keep all your photos and apps on your Android smart phone without worrying about storage; Get up to 512GB of storage with a MicroSD card (sold separately)",
      "Wireless voice, data and messaging services compatible with most major U. S. GSM and CDMA networks; Support for certain features and services such as VoWiFi and hot spot, vary by wireless service provider",
    ],
    price: [129],
    category: "mobile",
    id: 'DFGKJN6556643553FDIJGDFGFDG',
    rating: 5,
  },
  {
    title: "Samsung Galaxy Note 20",
    imgs: [
      "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas1/Bronze/Gallery-03-C1-Back-MysticBronze-1600x1200.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51f8QKnSnDL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41fdLkad2LL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61qmQ0PfBKL._AC_SL1000_.jpg",
    ],
    brand: "Samsung",
    variant: [
      "Mystic Bronze",
      "Mystic Gray",
      "Mystic Green"
    ],
    featuresTitle: [
      "Service Provider",
      "Brand	Samsung",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "T-Mobile",
      "Electronics",
      "6.3 Inches",
      "Android",
      "256 GB",
    ],
    price: [824, 824, 669],
    id: 'R6756756GYHJT6Y6UTYUT67RTHRTYU',
    rating: 5,
    category: "mobile",
  },
  {
    title: "Samsung Galaxy Note 10",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/61Qf3dkpcbL._AC_SL1500_.jpg",
      "https://image-us.samsung.com/us/smartphones/galaxy-note10/gallery/aura_white/002_gallery_D1_AuraWhite_back_w_pen.jpg",
      "https://image-us.samsung.com/us/smartphones/galaxy-note10/gallery/pens/011_gallery_D1_AuraWhite_pen_front.jpg",
      "https://image-us.samsung.com/us/smartphones/galaxy-note10/gallery/aura_white/003_gallery_D1_AuraWhite_left_front.jpg",
    ],
    brand: "Samsung",
    variant: [
      "Aura Black",
    ],
    featuresTitle: [
      "Service Provider",
      "Brand	Samsung",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "T-Mobile",
      "Electronics",
      "6.3 Inches",
      "Android",
      "256 GB",
    ],
    price: [498],
    category: "mobile",
    id: 'RY5R476TYURTY456YRRTHRTTRTYTY',
    rating: 5,
  },
  {
    title: "realme 8 Pro (6GB+128GB)",
    imgs: [
      "https://image01.realme.net/general/20210323/1616484998986.png",
      "https://image01.realme.net/general/20210323/1616485002564.png",
      "https://image01.realme.net/general/20210323/1616485005771.png",
      "https://image01.realme.net/general/20210323/1616485009296.png",
      "https://image01.realme.net/general/20210323/1616484950824.png",
      "https://image01.realme.net/general/20210323/1616484961517.png",
      "https://image01.realme.net/general/20210323/1616484974779.png",
      "https://image01.realme.net/general/20210323/1616484985322.png",
    ],
    brand: "realme",
    variant: [
      "Illuminating Yellow",
      "Infinite Black",
      "Infinite Blue"
    ],
    featuresTitle: [
      "Service Provider",
      "Brand	Samsung",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "T-Mobile",
      "Electronics",
      "6.3 Inches",
      "Android",
      "256 GB",
    ],
    price: [
      199,
      199,
      199
    ],
    category: "mobile",
    id: 'RY5R476TYURerrc3IUYC3456CX3U87345CYRRTHRTTRTYTY',
    rating: 5,
  },
  {
    title: "realme narzo 30 Pro 5G (6GB+64GB)",
    imgs: [
      "https://image01.realme.net/general/20210223/1614061250334.png",
      "https://image01.realme.net/general/20210223/1614061254248.png",
      "https://image01.realme.net/general/20210223/1614061257134.png",
      "https://image01.realme.net/general/20210223/1614061260816.png",
      "https://image01.realme.net/general/20210223/1614061225119.png",
      "https://image01.realme.net/general/20210223/1614061237058.png",
      "https://image01.realme.net/general/20210223/1614061229895.png",
    ],
    brand: "realme",
    variant: [
      "Sword Black",
      "Blade Silver",
    ],
    featuresTitle: [
      "Service Provider",
      "Brand	Samsung",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "T-Mobile",
      "Electronics",
      "6.3 Inches",
      "Android",
      "256 GB",
    ],
    price: [
      169,
      169
    ],
    category: "mobile",
    id: 'RY5R47457c8348c3uy74635fd35v353EDF4RTHRTTRTYTY',
    rating: 5,
  },
  {
    title: "Samsung Galaxy Note 10+",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/61LGgNjwg1L._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71JrruhVQ3L._AC_SL1500_.jpg",
    ],
    brand: "Samsung",
    variant: [
      "256GB",
      "512GB",
    ],
    featuresTitle: [
      "Service Provider",
      "Brand",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "Unlocked",
      "Samsung Electronics",
      "6.8 Inches",
      "Android",
      "512 GB",
    ],
    price: [999, 1199],
    category: "mobile",
    id: '7UFHJNTGHJ6T77R4576YGFHJTYUTYUYUTUYT',
    rating: 3,
  },
  {
    title: "Samsung Galaxy A52",
    imgs: [
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-a52-white.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-a52-blue.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-a52-black.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-a52-white-3.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-a52-blue-3.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-a52-black-3.jpg",
    ],
    brand: "Samsung",
    variant: [
      "8GB / 256GB",
    ],
    featuresTitle: [
      "Service Provider",
      "Brand",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "Unlocked",
      "Samsung Electronics",
      "6.8 Inches",
      "Android",
      "512 GB",
    ],
    price: [219],
    category: "mobile",
    id: '7UFHJNTGHJ6T772342CX35D345FXDFSVC45TYUYUTUYT',
    rating: 4,
  },
  {
    title: "Samsung Galaxy S10 Lite",
    imgs: [
      "https://images.samsung.com/is/image/samsung/in-galaxy-s10-lite-sm-g770-8gb-sm-g770fzbsinu-frontprismblue-206236698",
      "https://images.samsung.com/is/image/samsung/in-galaxy-s10-lite-sm-g770-8gb-sm-g770fzbsinu-backprismblue-206236687",
      "https://images.samsung.com/is/image/samsung/in-galaxy-s10-lite-sm-g770-8gb-sm-g770fzbsinu-lprismblue-206236688",
      "https://images.samsung.com/is/image/samsung/in-galaxy-s10-lite-sm-g770-8gb-sm-g770fzbsinu-lsideprismblue-206236689",
      "https://images.samsung.com/is/image/samsung/in-galaxy-s10-lite-sm-g770-8gb-sm-g770fzbsinu-rprismblue-206236690",
      "https://images.samsung.com/is/image/samsung/in-galaxy-s10-lite-sm-g770-8gb-sm-g770fzbsinu-rsideprismblue-206236691",
    ],
    brand: "Samsung",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "Service Provider",
      "Brand",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "Unlocked",
      "Samsung Electronics",
      "6.1 Inches",
      "Android 9.0",
    ],
    price: [599],
    category: "mobile",
    id: '7UFHJN2343455DREGVRTRCVETTRTTRT5454YUTUYT',
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "Samsung Galaxy A71",
    imgs: [
      "https://m.media-amazon.com/images/I/719CUSPTsgL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71rAk%2BY4QfL._SY741_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71Wh8ZPcGBL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61OAoXZYUjL._SY741_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/518eIUpUzRL._SY741_.jpg"
    ],
    brand: "Samsung",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "Brand",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
      "Color",
    ],
    bannerF: false,
    featuresValue: [
      "Samsung Electronics",
      "6.3 Inches",
      "Android",
      "64 GB",
      "Charcoal Black",
    ],
    price: [369],
    category: "mobile",
    id: 'ERTYGFDGBR5YHBFGYT54R7Y4',
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "Samsung Galaxy M20",
    imgs: [
      "https://www.mobiledokan.co/wp-content/uploads/2019/01/Samsung-Galaxy-M20.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51f0DsausnL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61z72xovXcL._AC_SL1500_.jpg",
      "https://rukminim1.flixcart.com/image/416/416/jsqe7bk0/mobile/g/s/q/samsung-m20-m20-original-imafdzzs7ymhrjvn.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/jsqe7bk0/mobile/g/s/q/samsung-m20-m20-original-imafdzzsuvtmbquz.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/jsqe7bk0/mobile/g/s/q/samsung-m20-m20-original-imafdzzsftvcdhaw.jpeg?q=70",
    ],
    brand: "Samsung",
    variant: [
      "16GB",
    ],
    featuresTitle: [
      "Brand",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
      "Color",
    ],
    bannerF: false,
    featuresValue: [
      "Samsung Electronics",
      "6.3 Inches",
      "Android",
      "64 GB",
      "Charcoal Black",
    ],
    price: [129],
    category: "mobile",
    id: 'UYVGHNTY675546YTGFEDR54G6TYFD4RTG',
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "Samsung Galaxy S20 FE 5G",
    imgs: [
      "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/galaxy-s20-fe-5g-images/cloud-navy/PDP-GALLERY-S20-FE-cloud-Navy-02-1600x1200.jpg?$product-card-small-jpg$",
      "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/galaxy-s20-fe-5g-images/cloud-navy/PDP-GALLERY-S20-FE-cloud-Navy-03-1600x1200.jpg?$product-card-small-jpg$",
      "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/galaxy-s20-fe-5g-images/cloud-navy/PDP-GALLERY-S20-FE-cloud-Navy-04-1600x1200.jpg?$product-card-small-jpg$",
      "https://images-na.ssl-images-amazon.com/images/I/61X3Z-gRI-L._AC_SL1500_.jpg ",
    ],
    brand: "Samsung",
    variant: [
      "Cloud Green",
      "Cloud Lavender",
      "Cloud Navy",
      "Cloud Orange",
      "Cloud Red",
      "Cloud White",
    ],
    featuresTitle: [
      "Service Provider",
      "Brand",
      "Display Size",
      "Operating System",
      "Memory Storage Capacity",
    ],
    bannerF: false,
    featuresValue: [
      "Unlocked",
      "Samsung Electronics",
      "6.5 Inches",
      "Android",
      "128 GB",
    ],
    price: [699, 699, 699, 699, 699, 699],
    category: "mobile",
    id: '345ETDFTGERT5464R5YRTY',
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "OPPO A33 3GB/32GB",
    imgs: [
      "https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/x/9/g/oppo-a33-cph2137-original-imafwqg8ashrnxrb.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/x/9/g/oppo-a33-cph2137-original-imafwqg84gpychj7.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/x/9/g/oppo-a33-cph2137-original-imafwqg82fgcsr3z.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/x/9/g/oppo-a33-cph2137-original-imafwqg8bup8c2vw.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/x/9/g/oppo-a33-cph2137-original-imafwqg87gpg2zzz.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/x/9/g/oppo-a33-cph2137-original-imafwqg8ftgwjbge.jpeg",
    ],
    brand: "OPPO",
    variant: [
      "32GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "",
      "Sensors",
    ],
    bannerF: false,
    featuresValue: [
      "ColorOS 7.2 based on Android 10",
      "Snapdragon 460 (11 nm)",
      "Octa-core",
      "Adreno 610 @600MHz 16fps",
      "3GB",
      "32GB (Support max to 256GB MicroSD)",
      "13MP+2MP+2MP",
      "8MP",
      "6.5 inches",
      "LCD (A-Si)",
      "1600×720 (Refresh Rate: up to 90Hz)",
      "Non-removable Li-Po 5000 mAh battery (Support 9V/2A charging)",
      "WLAN 2.4G/WLAN 5.1G/WLAN 5.8G, WLAN Display, 802.11a/b/g/n/ac. Bluetooth: Bluetooth 5.0",
      "Fingerprint (rear-mounted), accelerometer, proximity, compass",
    ],
    price: [120],
    id: '567GHY55UYVGHNTY6756U7HGN76Y56',
    category: "mobile",
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "OPPO Reno 4 8GB/128GB",
    imgs: [
      "https://www.oppo.com.my/webshaper/pcm/gallery/lg/d28b830305229bdf3de725d7870c2c1a1595909103-lg.png",
      "https://www.oppo.com.my/webshaper/pcm/gallery/lg/541ac14acfc2eec6db7ddba426f693a61595908305-lg.png",
      "https://www.oppo.com.my/webshaper/pcm/gallery/lg/9249f0d19020ed3f572f1d3e52b14d2b1595909014-lg.png",
      "https://www.oppo.com.my/webshaper/pcm/gallery/lg/e19f8dd6017e60b21cb72647778f515f1595908299-lg.png",
    ],
    brand: "OPPO",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "",
      "Sensors",
    ],
    bannerF: false,
    featuresValue: [
      "Android 10, ColorOS 7.2",
      "Qualcomm Snapdragon 720G",
      " Adreno™ 618",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "32 MP",
      "6.4 inches",
      "OLED",
      "2400*1080 pixels (FHD+)",
      "Non-removable Li-Po 4015 mAh battery",
      "WLAN: WLAN 2.4GHz / WLAN 5.1GHz / WLAN 5.4GHz / WLAN 5.8GHz. Bluetooth v5.1",
      "Support Geomagnetic sensor, Proximity sensor, Light sensor, G-sensor, Acceleration sensor, Gyroscope, Supports step counting",
    ],
    price: [329],
    id: '57FHYT76GH67GYJTYUYHG65ER3E45FGE5',
    category: "mobile",
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "OPPO F17 Pro 8GB/128GB",
    imgs: [
      "https://rukminim1.flixcart.com/image/416/416/kekadu80/mobile/y/q/5/oppo-f17-pro-cph2119-original-imafv7pxgndwsekf.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kekadu80/mobile/y/q/5/oppo-f17-pro-cph2119-original-imafv7px8uzzyhc9.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kekadu80/mobile/y/q/5/oppo-f17-pro-cph2119-original-imafv7px4gbmcrej.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kekadu80/mobile/y/q/5/oppo-f17-pro-cph2119-original-imafv7px5gvmfcnz.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kekadu80/mobile/p/t/y/oppo-f17-pro-cph2119-original-imafv7px7myjxxfd.jpeg?q=70",
    ],
    brand: "OPPO",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,
    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [229],
    id: '765656687453534FDFGDFGDFG5453',
    category: "mobile",
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "OPPO F17 8GB/128GB",
    imgs: [
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f17-4.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f17-2.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/o/p/oppo-f17-3.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/o/p/oppo-f17-front.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/o/p/oppo-f17-8.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/o/p/oppo-f17-6.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/o/p/oppo-f17-7.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/o/p/oppo-f17-9.jpg",
    ],
    brand: "OPPO",
    variant: [
      "128GB",
    ],

    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      "Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [199],
    category: "mobile",
    id: '6545456FGHFDGHFG54RY5456TYTFHYT',
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "realme 7 Pro 8GB/128GB",
    imgs: [
      "https://www.mobiledokan.com/wp-content/uploads/2020/09/Realme-7-Pro.jpg",
      "https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/r/e/realme-7-pro-5.jpg",
      "https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/r/e/realme-7-pro.jpg",
      "https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/r/e/realme-7-pro-3.jpg ",
    ],
    brand: "realme",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [219],
    id: '689779789987879987FGHGBNFGHFGH',
    category: "mobile",
    rating: 3,
  },
  {
    title: "realme 7i 8GB/128GB",
    imgs: [
      "https://i2.wp.com/www.mobilebd.co/wp-content/uploads/2020/09/Realme-7i--500x500.png",
      "https://www.devicefit.com/wp-content/uploads/2020/10/realme-7i-price-bd.jpg",
      "https://www.devicefit.com/wp-content/uploads/2020/10/realme-7i-price-bd-teal.jpg",
      "https://www.devicefit.com/wp-content/uploads/2020/10/realme-7i-price-bd-blue.jpg",
    ],
    brand: "realme",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [159],
    id: 'IUYOOIJUHHJJH0677676',
    category: "mobile",
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "realme Narzo 30A",
    imgs: [
      "https://www.devicefit.com/wp-content/uploads/2021/02/realme-narzo-30a-price-bd-blue-color.jpg",
      "https://www.devicefit.com/wp-content/uploads/2021/02/realme-narzo-30a-price-bd-front-side.jpg",
      "https://www.devicefit.com/wp-content/uploads/2021/02/realme-narzo-30a-price-bd-black-color.jpg",
    ],
    brand: "realme",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [159],
    id: 'UYYGUIUHCDH3476RCH345CGH476234C2Y',
    category: "mobile",
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "realme C11 2GB/32GB",
    imgs: [
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/r/e/realme-c11.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/r/e/realme-c11-3.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/r/e/realme-c11-7.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/r/e/realme-c11-4.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/r/e/realme-c11-6.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/r/e/realme-c11-5.jpg",
    ],
    brand: "realme",
    variant: [
      "32GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [129],
    id: 'TE45TDFG456TYFDT56654665665',
    category: "mobile",
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "realme 6 8GB/128GB",
    imgs: [
      "https://www.91-img.com/gallery_images_uploads/0/8/08949473309bdbf7b2082b6f218c514c250a6af4.jpg?w=0&h=901&q=80&c=1",
      "https://www.91-img.com/gallery_images_uploads/1/0/107a8866c41bcb65361c01638f2ec7eea849794c.jpg?w=0&h=901&q=80&c=1",
      "https://www.91-img.com/gallery_images_uploads/6/4/6419f586239b376f2ae777ae76980665cba9c618.jpg?w=0&h=901&q=80&c=1",
      "https://www.91-img.com/gallery_images_uploads/c/9/c9c444b2a277a64d5edabe995d3a898e9442161e.jpg?w=0&h=901&q=80&c=1",
      "https://www.91-img.com/gallery_images_uploads/b/c/bc8700f0df8e8c755b2f58609b1a59c5c30f3175.jpg?w=0&h=901&q=80&c=1",
    ],
    brand: "realme",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [209],
    id: '432324WERRFDDF34DSFF453RFFDF',
    category: "mobile",
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "Huawei nova 5T 8GB/128GB",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/61SnLBKlA0L._AC_SX425_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51e7869SzCL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/617YocpWTdL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61uQ47M3XsL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/611gCIMNcXL._AC_SL1000_.jpg",
    ],
    brand: "Huawei",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [259],
    id: 'ET456546565665DRFAS55W',
    category: "mobile",
    rating: 3,
    numOfReviews: 12,
  },
  {
    title: "Huawei P40 Pro 5G 8GB/256GB",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/610uWzNVzRL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51nzcl6oEcL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51sV2XJLEmL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51T0Gf%2Bzv6L._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51sV2XJLEmL._AC_SL1000_.jpg"
    ],
    brand: "Huawei",
    variant: [
      "256GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      " Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [999],
    id: 'ERTERTY4576RE544665656665546',
    category: "mobile",
    rating: 2,
    numOfReviews: 12,
  },
  {
    title: "Apple iPhone 12 128GB",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343705000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343702000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343703000",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/a/p/apple-iphone-12--9.jpg"
    ],
    brand: "Apple",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "IOS",
      "Apple A14",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "4GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [799],
    id: 'SDRFER435645DRFGERT45656',
    category: "mobile",
    rating: 3,
  },
  {
    title: "Apple iPhone 11 Pro 256GB",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;.v=1567022175704",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-white-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956148115",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144838",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-yellow-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1568141245782",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144763",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566960958082"
    ],
    brand: "Apple",
    variant: [
      "256GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [1199],
    id: 'FHBGHD4WER5345SDFFG',
    category: "mobile",
    rating: 3,
  },
  {
    title: "Apple iPhone X 256GB",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1548459953882",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1548459945536",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1548459944179",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1548459952533",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1548459943718",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1548459946146",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1547770528438",
    ],
    brand: "Apple",
    variant: [
      "256GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.", "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [999],
    id: 'DFRGDFTGHASYURTYT3D5456SW',
    category: "mobile",
    rating: 3,
  },
  {
    title: "Apple iPhone XR",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xr-white-gallery-2020?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943280921",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xr-white-gallery-2020_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943275401",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xr-white-gallery-2020_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943275344",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xr-blue-gallery-2020_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943274458",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xr-yellow-gallery-2020_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943282306",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xr-coral-gallery-2020_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943276947",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xr-coral-gallery-2020?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943277299",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xr-coral-gallery-2020_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943277906",
    ],
    brand: "Apple",
    variant: [
      "256GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.", "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [999],
    id: 'DFRGDFTGHA34557f5873F5Y357CY56SW',
    category: "mobile",
    rating: 3,
  },
  {
    title: "Apple iPhone 12 Pro 128GB",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021658000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021658000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021658000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-models-202010_GEO_US?wid=318&hei=380&fmt=jpeg&qlt=95&.v=1601610970000",
    ],
    brand: "Apple",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [899],
    id: 'WERXDFFG34EERFVED4R3543554354',
    category: "mobile",
    rating: 3,
  },
  {
    title: "Redmi Note 9 Pro 6GB/128GB",
    imgs: [
      "https://rukminim1.flixcart.com/image/416/416/kcdp5zk0/mobile/6/e/k/mi-redmi-note-9-pro-mzb9105in-original-imaftgy6ga6hjzda.jpeg?q=100",
      "https://rukminim1.flixcart.com/image/416/416/kcdp5zk0/mobile/6/e/k/mi-redmi-note-9-pro-mzb9105in-original-imaftgy6gwe9vnqr.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kcdp5zk0/mobile/6/e/k/mi-redmi-note-9-pro-mzb9105in-original-imaftgy6gadzpfpg.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kcdp5zk0/mobile/6/e/k/mi-redmi-note-9-pro-mzb9105in-original-imaftgy6mb7z7gak.jpeg",
    ],
    brand: "Redmi",
    variant: [
      "128GB",
    ],
    featuresTitle: [
      "OS",
      "CPU",
      "CPU Cores",
      "GPU",
      "RAM",
      "ROM",
      "Rear Camera",
      "Front Camera",
      "Screen",
      "Display Panel",
      "Resolution",
      "Battery",
      "Connectivity",
      "Bluetooth Version:",
      "Sensors",
    ],
    bannerF: false,

    featuresValue: [
      "ColorOS 7.2 (Based on Android 10)",
      "MediaTek Helio P95",
      "Octa-core",
      "IMG 9XM-HP8 970MHz",
      "8GB",
      "128 GB",
      "48MP+8MP+2MP+2MP",
      "16MP+2MP",
      "6.43 inches",
      "Super AMOLED",
      "2400*1080 (Refresh Rate: up to 60Hz)",
      " Non-removable Li-Po 4015 mAh battery (Fast Charge: VOOC 4.0)",
      "WLAN 2.4G, WLAN 5.1G, WLAN 5.8G, WLAN Display.",
      "Bluetooth v5.1",
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    ],
    price: [229],
    id: 'QARTATRRRDRFAS56543DSW',
    category: "mobile",
    rating: 3,
  },
  {
    title: "Samsung Galaxy S21 Ultra 5G",
    imgs: [
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-s21--ultra-phantom-black-3.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-s21--ultra-phantom-black-2.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-s21--ultra-phantom-silver-3.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-s21--ultra-phantom-silver-2.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-s21--ultra-phantom-silver.jpg"
    ],
    brand: "Samsung",
    variant: [
      "12GB/256GB",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [999],
    category: "mobile",
    id: 'AUYTT4375f65SDFC7634CXD3',
    rating: 4,
  },
  {
    title: "OPPO F19 Pro 8GB/128GB",
    imgs: [
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f19-pro-base-black.jpg-2_1.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f19-pro-base.jpg-2_1.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f19-pro-base.jpg-1_1.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f19-pro-base-purple_1.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f19-pro-base-purple.jpg-3_1.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f19-pro-base-purple.jpg-1_1.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/p/oppo-f19-pro-base-purple.jpg-2_1.jpg"
    ],
    brand: "",
    variant: [
      "8GB / 128GB",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [239],
    category: "mobile",
    id: 'JHJHGTFYFGH566556hgffgfg',
    rating: 4,
  },
  {
    title: "OnePlus Nord 8GB/128GB",
    imgs: [
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/n/oneplus-nord-8gb-128gb-5.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/n/oneplus-nord-8gb-128gb-8.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/n/oneplus-nord-8gb-128gb-9.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/n/oneplus-nord-8gb-128gb-7.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/n/oneplus-nord-8gb-128gb-2.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/n/oneplus-nord-8gb-128gb-3.jpg",
      "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/o/n/oneplus-nord-8gb-128gb-4.jpg"
    ],
    brand: "OnePlus",
    variant: [
      "8GB/128GB",
    ],
    featuresTitle: [
      "SKU",
      "Warranty Information",
      "Display Size(Inches)",
      "Front Camera",
      "System Storage",
      "RAM(GB)",
      "Processor",
      "CPU Speed(Ghz)",
      "Connectivity",
      "Battery mAh",
      "",
      "Back Camera",
      "Phone Model",
    ],
    featuresValue: [
      "OPNORD8128CIL",
      "12 Months Official Warranty",
      "6.44",
      "32MP+8MP",
      "128",
      "8",
      "Octa Core",
      "2.4 GHz",
      "Wi-Fi 802.11 a/b/g/n/ac, 2.4G/5G. Bluetooth: 5.1",
      "Non-removable Li-Po 4115mAh battery (Warp Charge 30T fast charging 5V/6A)",
      "48MP+8MP+5MP+2MP",
      "OnePlus Nord",
    ],
    about: [
      "",
    ],
    price: [249],
    category: "mobile",
    id: 'OIJN87IOKOIO875676OOIF',
    rating: 3,
  },
  {
    title: "IPhone 12 Mini",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604343708000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-white-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343707000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343705000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343706000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343706000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343707000"
    ],
    video: "https://www.apple.com/105/media/us/iphone-12/2020/7f5b7de7-9f8c-41eb-bf3b-f294773108e6/anim/hero/large.mp4",
    brand: "Apple",
    variant: [
      "64GB",
      "128GB",
      "256GB"
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [
      649,
      749,
      849
    ],
    category: "mobile",
    id: 'YTJHAWGYYUTW56243etgYTR45tUYTGGHJYTUYT433453',
    rating: 4,
  },
  {
    title: "SAMSUNG 22-inch T35F LED Monitor with Border-Less Design, IPS Panel, 75hz, FreeSync, and Eye Saver Mode (LF22T350FHNXZA), Dark Blue Gray",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/81TjRLHaz1L._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81TMvlacizL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81wEGCnscBL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71W4yu3PpQL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61jjGU0XtTL._SX679_.jpg"
    ],
    brand: "Samsung",
    variant: [
      '24"',
    ],
    featuresTitle: [
      "",
    ],
    bannerF: false,
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [999],
    category: "monitor",
    id: 'DSFJHBC76ETRIUFVE874345',
    rating: 4,
  },
  {
    title: "Samsung 24-inch (59.8 cm) Curved Gaming Monitor- Full HD, AMD Free Sync, 144 Hz Refresh Rate- LC24RG50FQWXXL",
    imgs: [
      "https://images-na.ssl-images-amazon.com/images/I/71dGb%2B7qhQL._SX450_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81ppLQcj6%2BL._SX450_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61pWv93qitL._SX450_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71fDc-wJZCL._SX450_.jpg"
    ],
    brand: "Samsung",
    variant: [
      '24"',
    ],
    featuresTitle: [
      "",
    ],
    bannerF: false,
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [119],
    category: "monitor",
    id: 'ASREWE43453E4TRDST435DFRGE4',
    rating: 4,
  },
  {
    title: "Apple Pro Display XDR",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-gallery1-201909?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1574201024213",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-gallery2-201909?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1564608420145",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-gallery3-201909?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1564608423286",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-gallery4-201909?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1564608420573",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-gallery5-201909?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1564608423432",
    ],
    brand: "Apple",
    variant: [
      "Standard glass",
      "Nano-texture glass"
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [
      4999,
      5999,
    ],
    category: "monitor",
    id: 'JHGYATS562432374HGFTRYTF2346234HTF',
    rating: 4,
  },
  {
    title: "Apple Mac mini",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-202011-gallery-3?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1603755840000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202011?wid=452&hei=158&fmt=jpeg&qlt=95&.v=1603403462000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-202011-gallery-2?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1603755828000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-202011-gallery-4?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1603755834000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-202011-gallery-5?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1603755827000"
    ],
    brand: "Apple",
    variant: [
      "8GB / 256GB",
      "16GB / 512GB"
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [
      699,
      1099,
    ],
    category: "pc",
    id: '23764UHGJYF3d476HGHGHG37644YHTGGF23476',
    rating: 4,
  },
  {
    title: "Apple 21.5‑inch iMac",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-215-gallery-1?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1603396639000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-215-gallery-2?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1594924223000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-215-gallery-3?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1603396637000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-215-gallery-4?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1594924227000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-215-gallery-5?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1603397121000",
    ],
    brand: "Apple",
    variant: [
      "8GB / 256GB",
      "16GB / 1TB"
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [
      1099,
      1299,
    ],
    category: "pc",
    id: '23487YHGUYIUY2367423DEG273642UDYT237623',
    rating: 4,
  },
  {
    title: "Apple Mac Pro",
    imgs: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-2019-gallery2?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1572644161517",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-2019-gallery1?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1572644160501",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-2019-gallery3?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1572644160616",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-2019-gallery4?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1572644161046",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-2019-gallery5?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1572644164524",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-2019-gallery6?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1572644163911"
    ],
    brand: "Apple",
    variant: [
      "32GB / 256GB",
      "48GB / 1TB"
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    price: [
      5999,
      6299,
    ],
    category: "pc",
    id: 'jhgd6235djhg32634dghf6534gc76345JHGFD',
    rating: 4,
  },
  {
    title: "Samsung 49' Odyssey G9 Gaming Monitor",
    imgs: [
      "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49g95tssnxza/Asset1.jpg",
      "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49g95tssnxza/Asset2.jpg",
      "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49g95tssnxza/Asset3.jpg",
      "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49g95tssnxza/Asset4.jpg",
      "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49g95tssnxza/Asset5.jpg",
      "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49g95tssnxza/Asset6.jpg",
    ],
    brand: "Samsung",
    variant: [
      "49'",
    ],
    featuresTitle: [
      "",
    ],
    featuresValue: [
      "",
    ],
    about: [
      "",
    ],
    bfp: true,
    price: [
      1699
    ],
    category: "monitor",
    id: 'jhgf346c3hu42876c3u45c76237652C43X24C',
    rating: 4,
  },
]



client.connect(err => {
  const productsCollection = client.db("a-ama-clone").collection("products");
  const deliveryCollection = client.db("a-ama-clone").collection("users-delivery-address");
  const categoriesCollection = client.db("a-ama-clone").collection("categories");

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
    productsCollection.findOne({
      id: req.params.id
    })
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

  const categories = [
    {
      title: 'mobile',
      url: 'mobiles',
      bTitle: 'Mobile',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`,
      iconUrl: ""
    },
    {
      title: 'PC',
      url: 'pcs',
      bTitle: 'Pc',
      icon: `<svg height="" version="1.1" viewBox="0 0 60 60" width="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="People" stroke="none" stroke-width="1"><g fill="#000000" id="Icon-28"><path d="M39,54 L36,54 L36,49 C36,48.447 35.553,48 35,48 C34.447,48 34,48.447 34,49 L34,55 C34,55.553 34.447,56 35,56 L39,56 C40.122,56 41.295,56.914 41.774,58 L18.225,58 C18.705,56.914 19.877,56 21,56 L31,56 C31.553,56 32,55.553 32,55 C32,54.447 31.553,54 31,54 L26,54 L26,49 C26,48.447 25.552,48 25,48 C24.448,48 24,48.447 24,49 L24,54 L21,54 C18.43,54 16,56.43 16,59 C16,59.553 16.448,60 17,60 L43,60 C43.553,60 44,59.553 44,59 C44,56.43 41.57,54 39,54 M28,40 C28,41.103 28.897,42 30,42 C31.103,42 32,41.103 32,40 C32,38.897 31.103,38 30,38 C28.897,38 28,38.897 28,40 M60,5 L60,41 C60,43.804 57.804,46 55,46 L5,46 C2.196,46 0,43.804 0,41 L0,35 C0,34.447 0.448,34 1,34 L55,34 C55.553,34 56,34.447 56,35 C56,35.553 55.553,36 55,36 L2,36 L2,41 C2,42.71 3.29,44 5,44 L55,44 C56.71,44 58,42.71 58,41 L58,5 C58,3.346 56.654,2 55,2 L5,2 C3.252,2 2.101,3.56 1.998,5.068 L2,31 C2,31.553 1.552,32 1,32 C0.448,32 0,31.553 0,31 L0,5 C0.191,2.166 2.386,0 5,0 L55,0 C57.757,0 60,2.243 60,5" id="imac"/></g></g></svg>`,
      iconUrl: "https://img.icons8.com/small/120/000000/broken-computer.png"
    },
    {
      title: 'laptop',
      url: 'laptops',
      bTitle: 'Laptop',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
    </svg>`,
      iconUrl: ""
    },
    {
      title: 'monitor',
      url: 'monitors',
      bTitle: 'Monitor',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
      <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
    </svg>`,
      iconUrl: ""
    },
  ]

  // Set category
  app.get('/categoriesAdd', (req, res) => {
    categoriesCollection.insertMany(categories)
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

app.listen(port)