import express from 'express';
import CityRoutes from './routes/CityRoutes'

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Use route "/city" to list all cities.<br/>Use route "/city/:cityID" to filter a city.')
});

app.use('/city/', CityRoutes)

app.listen(3000);