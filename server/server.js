const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Route to get card data
app.get("/cards", (req, res) => {
  res.json([{ balance: "$5,756", cardHolder: "Eddy Cusuma", cardNumber: "3778 **** **** 1234", validThru: "12/22" }]);
});

// Route to get transaction data
app.get("/transactions", (req, res) => {
  res.json([
    { title: "Deposit from my Card", date: "28 January 2021", amount: "-$850" },
    { title: "Deposit Paypal", date: "25 January 2021", amount: "+$2,500" },
    { title: "Jemi Wilson", date: "21 January 2021", amount: "+$5,400" },
  ]);
});

app.get("/", (req, res) => {
    res.send("Welcome to the API!");
  });
  
app.listen(3001, () => console.log("Server running on http://localhost:3001"));
