import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */


export async function createTodo(userId: number, title: string, description: string) {
    const insertData = [userId, title, description];
    const insertQuery: string = 'insert into todos(user_id, title, description) values($1, $2, $3)';
    await client.query(insertQuery, insertData);
    const getQuery = 'select title, description, done, id from todos where user_id = $1 and title = $2 and description = $3';
    const response = await client.query(getQuery, insertData);
    const result = response.rows[0];
    return result
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const updateQuery: string = 'update todos set done = true where id = $1';
    await client.query(updateQuery, [todoId]);
    const getQuery = 'select title, description, done, id from todos where id = $1';
    const response = await client.query(getQuery, [todoId]);
    const result = response.rows[0];
    return result;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const getQuery: string = 'select * from todos where user_id = $1';
    const response = await client.query(getQuery, [userId]);
    return response.rows
}