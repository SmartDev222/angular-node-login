const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse request of content-type -app/json
app.use(express.json());

//parse requests of content-type -app/x-ww-form-urlencoded
app.use(express.urlencoded({extended: true}));

//simple route
app.get("/", (req, res) => {
	res.json({message: "Welcome to Cody app."});
})

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});