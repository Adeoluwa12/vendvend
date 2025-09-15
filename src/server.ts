import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import vendorRoutes from './routes/vendors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/vendors', vendorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Demo backend running on http://localhost:${PORT}`));
