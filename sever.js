const express = require('express');

const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
const COMMON = require('./COMMON');
const uri = COMMON.uri;
const carModel = require('./carModel');
const apiMobile = require('./api');
app.use('/api', apiMobile);
app.get('/add_xe', async (req, res) => {
    await mongoose.connect(uri);
    let car = req.body;
    console.log(car);

    let kq = await carModel.create(car);
    console.log(kq);

    let cars = await carModel.find();
    res.send(cars);
});

app.get('/xoa/:id', async (req, res) => {
    await mongoose.connect(uri);
    let id = req.params.id;
    console.log(id);

    await carModel.deleteOne({_id: id});

    res.redirect('../')
})

app.get('/update/:ten', async (req,res) => {
    await mongoose.connect(uri);
    console.log("ket noi thanh cong!");

    let tenXe = req.params.ten;
    console.log(tenXe);

    let tenXeMoi = tenXe + "Phien ban moi nhat";

    await carModel.updateOne({ten: tenXe}, {ten: tenXeMoi});

    let xehois = await carModel.find({});
    res.send(xehois); 
})

