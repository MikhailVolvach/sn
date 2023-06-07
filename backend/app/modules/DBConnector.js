const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("5" + err.message);
        return;
    }

    console.log('Connected to database');
});

db.serialize(() => {
    db.each(`select * from users;`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + '\t' + row.name);
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }

    console.log('Closed database');
});