const express = require("express");
const bodyparser = require('body-parser');

const {PORT} = require('./config/serverConfig')
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async ()=>{

    //create the express object
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended : true}));

    app.listen(PORT, async()=>{
        console.log(`Server started at ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({name:"new Delhi"});
        const repo = new CityRepository();
        repo.deleteCity(1);    
    });
}

setupAndStartServer();
