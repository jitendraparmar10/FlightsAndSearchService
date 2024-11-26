/
    - src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    -tests/ [later]

# welcome to Flight Service

## Project Setup
 - clone the project on your local
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 -Create a `.env` file in the root directory and add the following environment variable 
    `PORT = 3000`
-Insilde the `src/config` folder create a new `config.json` and then add the following piece of json

```

{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above , go to the src folder from from your terminal and execute `npx sequelize db:create`
and then execute 
`npx sequelize db:migrate`


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - one airport can have many flight , but a flight belongs to one airport



  ## Tables 

  ### City -> id, name , created_at , updated_at
  ### airport -> id , name , address , city_id , created_at , updated_at
    Relationship -> City has many airports and Airports belongs to a city (one to many)

    ```
    npx sequelize model:generate --name Airport --attributes  name:String,address:String,cityId:integer
    ```

    