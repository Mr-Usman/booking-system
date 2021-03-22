const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb+srv://adilsikandar:adil1234@cluster0.c77nh.mongodb.net/hotels-booking";
const databaseName = "hotel-booking";

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        return console.log("Unable connect to database");
      }
      
      const db = client.db(databaseName);

      console.log('database connected!!');
    }
  );