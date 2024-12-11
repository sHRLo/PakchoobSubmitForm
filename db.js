import mysql from 'mysql'

let connection;


export const connectToDatabase = async () => {
    if(!connection) {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'PM'
        })
    }
    return connection;
}