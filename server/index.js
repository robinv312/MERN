import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRouter from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "300000mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "300000mb", extended: true }));

app.use(cors());

app.use('/posts', postRouter);


const CONNECTION_URL = 'mongodb+srv://robinv312:Aims%402022@cluster0.xcwyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);