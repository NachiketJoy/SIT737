const express = require('express')
const app = express();

const PORT = process.env.port | 3001;

app.get('/', (req, res) => {
  res.send('Homepage')
})

const addNumber = (num1, num2) => {
  return num1 + num2;
}

const subtractNumber = (num1, num2) => {
  return num1 - num2;
}


// subtraction using GET req(http://localhost:3001/subtract?num1=10&num2=4)
app.get("/subtract", (req, res) => {
  const getNum01 = Number(req.query.num1);
  const getNum02 = Number(req.query.num2);

  if (isNaN(getNum01) || isNaN(getNum02)) {
    return res.status(400).send("Both num1 and num2 must be valid numbers.");
  }

  const diff = subtractNumber(getNum01, getNum02)
  res.send(`The difference for ${getNum01} - ${getNum02} is ${diff}`);
});

// addition using GET req(http://localhost:3001/addition?num1=10&num2=4)
app.get("/addition", (req, res) => {
  // get the data for num1 and num2
  const getNum01 = Number(req.query.num1);
  const getNum02 = Number(req.query.num2);

  const sum = addNumber(getNum01, getNum02)
  res.send(`The sum for ${getNum01} + ${getNum02} is ${sum}`);
});

app.listen(
  PORT,
  () => console.log(`Server running on port: ${PORT}`)
)