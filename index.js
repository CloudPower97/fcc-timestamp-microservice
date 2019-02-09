const express = require('express');
const helmet = require('helmet');
var cors = require('cors');
const timestampRouter = require('./routes/timestamps');

const PORT = process.env.PORT || 5000;

const app = express()
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use(
    express.urlencoded({
      extended: false
    })
  );

app.use('/api/timestamp', timestampRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
