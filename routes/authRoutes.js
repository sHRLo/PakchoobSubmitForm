import express from "express";
import {connectToDatabase} from "../db.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = express.Router();


router.post('/login', async (req, res) => {
    const { username , password } = req.body;
    try{
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE username=?', [username, password] )
        if(rows.length === 0){
            return res.status(404).json({message: 'user not found.'})
        }
        const isMatch = await bcrypt.compare(password, rows[0].password)
        if (!isMatch) {
            return res.status(401).json({message: 'Wrong Password.'})
        }
        const token = jwt.sign({id: rows[0].id},process.env["JWT_KEY "], {expiresIn: "3h"})

        return res.status(201).json({token: token})
    } catch (err) {
        return res.status(500).json(err.message)
    }
})