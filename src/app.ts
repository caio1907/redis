import express from 'express';
import CityRoutes from './routes/CityRoutes'

const app = express();
app.use(express.json());

app.use('/city/', CityRoutes)

app.listen(3000);