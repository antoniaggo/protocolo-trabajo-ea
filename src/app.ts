import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import coursesRoutes from './routes/courses.routes';


// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
/* app.get('/', (req, res) => {
  return res.status(400).send(`The API is at http://localhost:${app.get('port')}`);
}); */


app.use(coursesRoutes);

export default app;