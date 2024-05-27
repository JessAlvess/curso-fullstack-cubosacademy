// conexão com o BD, desta maneira a API se torna lenta devido a abertura
// de novas conexões a cada chamada
const { Client } = require('pg')

const client = new Client()
await client.connect()

const res = await client.query('SELECT NOW()')

await client.end

// POOL de CLIENTS

const { Pool} = require('pg')
const pool = new Pool()

const selectTimestamp = async (req, res) => {
    const timestamp = await pool.query('SELECT NOW()')
    return res.json(timestamp)
}

const selectDate = async (req, res) => {
    const date = await pool.query('SELECT CAST(NOW() AS DATE)')
    return res.json(date)
}
