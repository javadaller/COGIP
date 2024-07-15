import mysql, { Connection } from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
//
let connection: Connection | null = null

export const connectToDatabase = (): Promise<Connection> => {
  return new Promise((resolve, reject) => {
    if (connection) {
      resolve(connection)
    } else {
      connection = mysql.createConnection(dbConfig)

      connection.connect((err) => {
        if (err) {
          console.error('Error connecting to database:', err)
          reject(err)
        } else {
          console.log('Connected to MySQL database.')
          if (connection) {
            resolve(connection)
          } else {
            reject(new Error('Connection object is null after successful connection.'))
          }
        }
      });
    }
  });
};

export const closeDatabaseConnection = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (connection) {
      connection.end((err) => {
        if (err) {
          console.error('Error closing database connection:', err)
          reject(err)
        } else {
          console.log('Database connection closed.')
          connection = null
          resolve()
        }
      });
    } else {
      resolve()
    }
  });
};
