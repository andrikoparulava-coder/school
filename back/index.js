const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const Trip = require('./models/Trip');
const Booking = require('./models/Booking')

const app = express();

app.use(cors());
app.use(express.json());

//mongodb+srv://andrikoparulava_db_user:N8pnMLuQHpxXK7uM@cluster0.nqe88ai.mongodb.net/
//mongodb://127.0.0.1:27017/school
mongoose.connect("mongodb+srv://andrikoparulava_db_user:N8pnMLuQHpxXK7uM@cluster0.nqe88ai.mongodb.net/school")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("API working");
});

app.get("/trip", async (req, res) => {
    const trip = await Trip.find()

    res.json(trip);
});

app.post('/api/book', async (req, res) => {
  
    const { students, parents, teachers, destination, menu, firstName, lastName, schoolName } = req.body;

    
    if (!firstName || !lastName || !schoolName) {
        return res.status(400).json({ error: "Please fill in all required fields" });
    }

    try {
        const newBooking = await Booking.create({
            students, parents, teachers, destination, menu,
            firstName, lastName, schoolName
        });
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ error: "Failed to save" });
    }
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});