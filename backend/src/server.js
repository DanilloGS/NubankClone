import express from 'express'
import routes from './routes';
import mongoose from 'mongoose';
import dotenv from '../config';

const app = express();

app.use(express.json());

mongoose.connect(dotenv.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=>{
    console.log("DB connnection successful!");
})
.catch((error) => {
    console.log(error);
});

app.use(routes);


app.listen(dotenv.port, () => {
    console.log("Start");
});