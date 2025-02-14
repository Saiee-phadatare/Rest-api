const mongoose = require("mongoose");

//connecting with mongodb
async function connectmongodb(url) {
    return mongoose .connect(url)
}

module.exports = {
    connectmongodb,
};

