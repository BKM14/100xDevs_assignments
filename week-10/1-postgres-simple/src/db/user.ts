import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertQuery = 'insert into users(username, password, name) values ($1, $2, $3)';
    const insertData = [username, password, name];
    await client.query(insertQuery, insertData);
    const getUser = 'select username, password, name from users where username = $1 and password = $2 and name = $3';
    const response = await client.query(getUser, insertData);
    return response.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const getQuery = 'select id, username, password, name from users where id = $1';
    const response = await client.query(getQuery, [userId]);
    return response.rows[0];
}
