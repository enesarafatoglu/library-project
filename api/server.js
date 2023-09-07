const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const BookStore = require("./models/BookModel");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// veri tabanına bağlanma
mongoose
  .connect(
    "mongodb+srv://@cluster0.npbgion.mongodb.net/books?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

app.get("/books", (req, res) => {
  BookStore.find().then((books) => res.json(books));
});

// veri tabanına yeni bir kitap eklenmesi
app.post("/newbook", async (req, res) => {
  try {
    const newBook = new BookStore({
      bookName: req.body.bookName,
      author: req.body.author,
      quantity: req.body.quantity,
      section: req.body.section,
      comments: req.body.comments,
    });

    const book = await newBook.save();
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
});

//Kitap silme
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(typeof id);
  await BookStore.findByIdAndDelete({ _id: id })
    .then((doc) => {
      console.log("Mission completed");
    })
    .catch((err) => {
      console.error("err");
    });
});
//Kütüphaneden kitap eksilmesi
app.put("/give/:id", async (req, res) => {
  try {
    await BookStore.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: -1 },
    });
  } catch (err) {
    console.log(err);
  }
});
//Kütüphaneye kitap geri getirme
app.put("/bring/:id", async (req, res) => {
  try {
    await BookStore.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: +1 },
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Server is working!");
});
