const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post('/', (req, res) => {
  const { value = 0 } = req.body;
  return res.json({
    value: Number(value) + 1
  });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on PORT', process.env.PORT || 3000);
})