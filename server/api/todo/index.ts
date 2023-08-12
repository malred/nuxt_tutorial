import { db } from "~~/server/db";
// server/api/todo/index.ts
export default defineEventHandler((e) => {
    const method = e.req.method;
    if (method === "GET") {
        return db.todos;
    }
});