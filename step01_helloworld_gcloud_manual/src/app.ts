import express from 'express';

const app = express();
const port = process.env.PORT || "8080";

app.get('/', (req, res) => {
  res.send('Hello from Zeeshan!');
});
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});