import express  from "express";
import cors from "cors";
import mongoose  from "mongoose";
import dotenv  from "dotenv";
import router from "./server/routes/router.js";
import setupSwagger from "./server/Documentation/swagger.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);
app.use(express.urlencoded({ extended: true}));

//LOAD ROUTERS
app.use('/', router);

//MANAGE PORTS
const PORT = process.env.PORT || 2003;
const MONGOURL = process.env.MONGO_URL;

//CONNECT DATABASE AND RUN THE SERVER
mongoose.connect(MONGOURL).then(() => {
    console.log("DataBase Connected Successfully.");
    app.listen(PORT, () => {
        console.log(`Server Is Running On Port ${PORT}`);
    });
}).catch((error) => console.log(error));


