import express, {Request, Response} from  "express";
import cors from "cors";
import dotenv from 'dotenv';
import routes from "./routes";
dotenv.config();
import { info } from "@repo/logs/logs";

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 1338;



app.listen(port , async () => {
    info(`App is running at port: http://localhost:${port}`);
    info("value",process.env.FIREBASE_API_KEY)

    routes(app);

})


export default app;