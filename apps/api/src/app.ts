import express, {Request, Response} from  "express";
import cors from "cors";
import dotenv from 'dotenv';
import routes from "./routes";
dotenv.config();


const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 1338;



app.listen(port , async () => {
    console.log(`App is running at port: http://localhost:${port}`);
    routes(app);

})


export default app;