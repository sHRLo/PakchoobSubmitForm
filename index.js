import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: process.env["DB_HOST "],
    user: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_NAME"],
});

app.post("/submit", (req, res) => {
    const sql =
        "INSERT INTO submit (`formcode`,`section`,`shift`,`operatorname`,`formdate`,`problemtype`,`stopstatus`,`stopdate`,`startdate`,`problemdescription`) VALUES (?)";
    const values = [
        req.body.formcode,
        req.body.section,
        req.body.shift,
        req.body.operatorname,
        req.body.formdate,
        req.body.problemtype,
        req.body.stopstatus,
        req.body.stopdate,
        req.body.startdate,
        req.body.problemdescription,
    ]
    db.query(sql, [values],(err,result) => {
        if(err) return res.json({Error: "Inserting data Error in server"});
        return res.json({Status: "Success"})
    })
});

app.listen(process.env["PORT "], () => {
    console.log(`Running...`);
});
