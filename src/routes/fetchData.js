var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "../../Hotel-Booking.sqlite"
let results = [];

async function getBookingRecord() {
    let db = new sqlite3.Database(DBSOURCE, (err) => {
        if (err) {
          // Cannot open database
          console.error(err.message)
          throw err
        }else{
            console.log('Connected to the SQLite database.')
            var query = 'SELECT BU_DAUER,guestNamesForScheduleMap from b_buchungen where BU_DAUER = 17';
             db.all(query, function (err, rows) {
                if(err){
                    console.log(err);
                }
                else{
                //   console.log('name', rows);
                  let value = rows;
                if(rows.length > 0) {
                    for(var i = 0; rows.length > i;i++) {
                        results[i] = rows[i]
                    }
                    // console.log('new data res:', results);
                    return results;
                }
                }
              });

        }
    }
    );
    return db;
}

async function getFinalRecord() {
    const data  = await getBookingRecord();
    console.log('lolll', data);
}

getFinalRecord();

// getBookingRecord().then(res => console.log('ressss:', res));
// console.log('usman log', usman);


// module.exports = finalResults