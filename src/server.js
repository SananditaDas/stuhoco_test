import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import router from './routes/user.js';

const app = express();


app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',router);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
