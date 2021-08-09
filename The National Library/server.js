const express = require("express");
var cors = require('cors');
const app = express();
const port = 8000;
app.use(cors());

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port:0 ${port}`));
