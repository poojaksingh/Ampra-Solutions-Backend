const express = require("express"); 
const cors = require("cors");
const { mongoConnection } = require("./middleware/db");
const app = express();

// CORS
app.use(cors()); //cross origin resource sharing

// EXPRESS BODY-PARSER
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


// MONGO DB CONNECTION
mongoConnection();


// ROUTES
require("./middleware/routes")(app);

// EXPRESS SERVER
app.listen(5000, async () => console.log(`Server Running on Localhost : 5000`));
