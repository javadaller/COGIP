import { connectToDatabase } from '../connect/connect.js'

export async function getAllUsers() {
    try {
        const connection = await connectToDatabase()
        const sql = 'SELECT * FROM users'
        const [rows] = await connection.query(sql)

        console.log('Liste des utilisateurs :', rows)

        await connection.end();

        return rows
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error)
        throw error
    }
}

export async function loginUser(email: string, password: string) {
    try {
        const connection = await connectToDatabase()
        const sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
        const [rows] = await connection.query(sql, [email, password]) as any

        console.log('User login:', rows)

        await connection.end()

        return rows[0]
    } catch (error) {
        console.error('Error during user login:', error)
        throw error
    }
}

export async function registerUser(email: string, password: string, first_name: string) {
    try {

        if ((!email || !password || !first_name)) {
            console.error("entry not valid")
            return
        }

        const connection = await connectToDatabase()

        const checkSql = 'SELECT * FROM users WHERE email = ? OR first_name = ?'
        const [checkRows] = await connection.query(checkSql, [email, first_name]) as any

        if (checkRows.length > 0) {
            console.error('Email or first name already exists')
            return
        }

        const sql = 'INSERT INTO users (email, password, first_name, role_ID, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)'
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
        const [result] = await connection.query(sql, [email, password, first_name, 2, now, now]) as any

        console.log('User registered:', result)

        await connection.end()

        return result
    } catch (error) {
        console.error('Error during user registration:', error)
        throw error
    }
}

export async function promoteUser(id: number) {
    const connection = await connectToDatabase();
    const sql = 'UPDATE users SET role_ID = ? WHERE ID_user = ?';
    const [result] = await connection.query(sql, [1, id]) as any; // supposons que 1 est le rôle d'administrateur
    await connection.end();
    return result;
}

export async function demoteUser(id: number) {
    const connection = await connectToDatabase();
    const sql = 'UPDATE users SET role_ID = ? WHERE ID_user = ?';
    const [result] = await connection.query(sql, [2, id]) as any; // supposons que 2 est le rôle d'utilisateur standard
    await connection.end();
    return result;
}

