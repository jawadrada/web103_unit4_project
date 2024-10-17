import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

// Configure database connection with environment variables
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

// Create a new pool with the connection details
export const pool = new pg.Pool(config)