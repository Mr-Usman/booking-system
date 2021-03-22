const express = require("express");
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

// var fs = require('fs');
// var dbFile = './database.sqlite';

const DBSOURCE  = '../../Hotel-Booking.sqlite';

router.post("/check-booking", (req, res) => {
    try {
        let db = new sqlite3.Database(DBSOURCE, (err) => {
            if (err) {
                // Cannot open database
                console.error(err.message)
                throw err
            }else{
                // console.log('database')
                const { bookingID: BU_DAUER } = req.body;
                console.log('Connected to the SQLite database.')
                var query = 'SELECT BU_DAUER,guestNamesForScheduleMap from b_buchungen where BU_DAUER = ?';
                db.all(query,[BU_DAUER],function (err, rows) {
                    if(err){
                        console.log(err.message);
                    }else{
                        console.log('name', rows);
                    }
                    }); 
            }
        });

    //   const { bookingID } = req.body;
    //   console.log('booking id:', bookingID);
    //   let sql = `SELECT
    //              BU_DAUER,
    //              guestNamesForScheduleMap
    //              FROM b_buchungen
    //              WHERE BU_DAUER  = ?`;
    //   db.all(sql, [bookingID],
    //   (error, rows) => {
    //     console.log('resulted rows:', rows);
    //     rows.forEach((row) => {
    //     console.log('all rows', row);
    //   })
    //   });
      res.status(200).send();
    } catch (e) {
      res.status(500).send();
    }
  });

//   module.exports = db
module.exports = router;